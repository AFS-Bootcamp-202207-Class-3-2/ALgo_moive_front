import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userInfo: undefined,
    token: undefined,
};

// 存值函数
// 接收三个参数：键、值、有效天数
Storage.prototype.setCanExpireLocal = (key, value, expire) => {
    // 判断传入的有效期是否为数值或有效
    // isNaN是js的内置函数，用于判断一个值是否为NaN（非数值），
    // 非数值返回true，数值返回false
    // 还可以限制一下有效期为整数，这里就不做了
    if (isNaN(expire) || expire < 1) {
        throw new Error('有效期应为一个有效数值')
    }
    // 3_600_000 1小时的毫秒数，_是数值分隔符
    let time = expire * 3_600_000
    let obj = {
        data: value, //存储值
        time: Date.now(), //存值时间戳
        expire: time, //过期时间
    }
    // 注意，localStorage不能直接存储对象类型，sessionStorage也一样
    // 需要先用JSON.stringify()将其转换成字符串，取值时再通过JSON.parse()转换回来
    localStorage.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getCanExpireLocal = key => {
    let val = localStorage.getItem(key)
    // 如果没有值就直接返回null
    if (!val)  return val
    // 存的时候转换成了字符串，现在转回来
    val = JSON.parse(val)
    // 存值时间戳 +  有效时间 = 过期时间戳
    // 如果当前时间戳大于过期时间戳说明过期了，删除值并返回提示
    if (Date.now() > val.time + val.expire) {
        localStorage.removeItem(key)
        return '值已失效'
    }
    return val.data
}

const NavigationSlice = createSlice({
    name: "navigationSlice",
    initialState,
    reducers: {
        loadUserInfo: (state, action) => {
            const token = Storage.prototype.getCanExpireLocal("token");
            const userInfo = Storage.prototype.getCanExpireLocal("userInfo");
            if(token === '值已失效') {
                state.token = undefined;
                state.userInfo = undefined;
            } else{
                state.token = token;
                state.userInfo = userInfo;
            }
        },

        saveUserInfo: (state, action) => {
            Storage.prototype.setCanExpireLocal("userInfo", action.payload, 2);
            Storage.prototype.setCanExpireLocal("token", action.payload.token, 2);
        }
    },
});

export const { loadUserInfo, saveUserInfo } = NavigationSlice.actions;
export default NavigationSlice.reducer;