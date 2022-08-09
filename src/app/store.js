import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/home/HomeSlice";
import loginSlice from "../features/login/loginSlice";
import movieDetailSlice from "../features/movieDetail/movieDetailSlice";
import paySlice from '../features/pay/paySlice'
import chooseSeatSlice from "../features/chooseSeat/ChooseSeatSlice"

export const store = configureStore({
  reducer: {
    home: homeSlice,
    login: loginSlice,
    movieDetail: movieDetailSlice,
    payCountDown:paySlice,
    chooseSeat:chooseSeatSlice
  },
});
