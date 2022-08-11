import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLogin: true,
    sessionId: null,
    movieId: null,
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
        },

        setSkipToDragon : (state, action) => {
            state.movieId = action.payload;
        }
    }
});

export const { changePageState, setSkipPageProperties, setSkipToDragon } = loginSlice.actions;
export default loginSlice.reducer;
