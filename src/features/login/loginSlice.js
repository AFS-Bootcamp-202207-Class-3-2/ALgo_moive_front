import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLogin: true
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        changePageState :(state, action) => {
            state.isLogin = !state.isLogin;
        }
    }
});

export const { changePageState } = loginSlice.actions;
export default loginSlice.reducer;
