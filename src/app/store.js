import {configureStore} from "@reduxjs/toolkit";
import homeSlice from "../features/home/HomeSlice";
import loginSlice from "../features/login/loginSlice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
        login: loginSlice
    }
})
