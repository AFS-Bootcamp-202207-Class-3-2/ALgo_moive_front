import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countDown: null,
};

const payCountDown = createSlice({
    name: "payCountDown",
    initialState,
    reducers: {
        readyForPay: (state, action) => {
            state.countDown = action.payload;
        },
    },
});

export const { readyForPay } = payCountDown.actions;
export default payCountDown.reducer;
