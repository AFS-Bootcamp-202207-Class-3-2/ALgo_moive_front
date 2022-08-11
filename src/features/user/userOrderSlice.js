import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    totalCount: 1
};

const userOrderSlice = createSlice({
    name: "userOrder",
    initialState,
    reducers: {
        saveOrders: (state, action) => {
            state.orders = action.payload;
        },

        setTotalCount: (state, action) => {
            state.totalCount = action.payload;
        },

        deleteOrder: (state, action) => {
            const index = state.orders.findIndex(order => order.orderId === action.payload);
            state.orders.splice(index, 1);
        }
    }
});

export const { saveOrders, setTotalCount, deleteOrder} = userOrderSlice.actions;
export default userOrderSlice.reducer;
