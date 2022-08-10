import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLogin: true,
    sessionId: null,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        changePageState :(state, action) => {
            state.isLogin = !state.isLogin;
        },

        setSkipPageProperties : (state, action) => {
           state.sessionId = action.payload;
        }
    }
});

export const { changePageState, setSkipPageProperties } = loginSlice.actions;
export default loginSlice.reducer;
