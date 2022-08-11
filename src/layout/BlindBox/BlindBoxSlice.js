import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalVisible: false,
};

const blindBoxSlice = createSlice({
  name: "blindBox",
  initialState,
  reducers: {
    changeBlindBoxModalVisible: (state, action) => {
      state.modalVisible = action.payload;
    },
  },
});
export const { changeBlindBoxModalVisible } = blindBoxSlice.actions;
export default blindBoxSlice.reducer;
