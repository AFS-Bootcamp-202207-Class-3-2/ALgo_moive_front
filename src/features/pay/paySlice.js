import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    qrValid: true,
};

const payCountDown = createSlice({
    name: "payCountDown",
    initialState,
    reducers: {
        updateQrValid: (state, action) => {
            state.qrValid = action.payload;
        },
    },
});

export const { updateQrValid } = payCountDown.actions;
export default payCountDown.reducer;
