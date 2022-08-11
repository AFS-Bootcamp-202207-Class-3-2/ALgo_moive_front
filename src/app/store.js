import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/home/HomeSlice";
import loginSlice from "../features/login/loginSlice";
import movieDetailSlice from "../features/movieDetail/movieDetailSlice";
import paySlice from "../features/pay/paySlice";
import chooseSeatSlice from "../features/chooseSeat/ChooseSeatSlice";
import navigationSlice from "../layout/Navigation/NavigationSlice";
import userOrderSlice from "../features/user/userOrderSlice";
import blindBoxSlice from "../layout/BlindBox/BlindBoxSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    login: loginSlice,
    movieDetail: movieDetailSlice,
    payCountDown: paySlice,
    chooseSeat: chooseSeatSlice,
    navigation: navigationSlice,
    userOrder: userOrderSlice,
    blindBox: blindBoxSlice,
  },
});
