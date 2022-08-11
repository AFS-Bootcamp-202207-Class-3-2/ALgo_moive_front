import request from './api';
const UserOrdersApi = {
    getUserOrders(userId,page,pageSize){
        return request({
            url: `/order/user/${userId}?page=${page}&pageSize=${pageSize}`,
            method: 'get'
        })
    },

    deleteOrdersFromUserById(orderId){
        return request({
            url:`/order/user/d/${orderId}`,
            method:'delete'
        })
    }
    ,
    //退票改状态为3，解锁座位
    refundUnlockSeats(orderId){
        return request(({
            url: `/order/refund/${orderId}`,
            method: 'put'
        }))
    }
    ,
    realDeleteForWatched(orderId){
        return request(({
            url: `/order/user/refund/d/${orderId}`,
            method: 'delete'
        }))
    }
}
export default UserOrdersApi;