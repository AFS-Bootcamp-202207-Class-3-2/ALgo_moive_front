import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    totalCount: 0,
    pages:[]
};

const userOrderSlice = createSlice({
    name: "userOrder",
    initialState,
    reducers: {
        clearCurrentPageOrders: (state, action) => {
            state.orders = action.payload;
        },
        saveOrders: (state, action) => {
            console.log(action.payload.length)
            state.orders = action.payload;
        },

        setTotalCount: (state, action) => {
            state.totalCount = action.payload;
        },

        deleteOrder: (state, action) => {
            const index = state.orders.findIndex(order => order.orderId === action.payload);
            state.orders.splice(index, 1);
            state.totalCount = state.orders.length;
        },
        refundOrder: (state, action) => {
            const index = state.orders.findIndex(order => order.orderId === action.payload.id);
            console.log(index,action.payload)
            if (index !== -1) {
                state.orders[index].status = action.payload.status;
            }
        }
    }
});

export const { refundOrder,saveOrders, setTotalCount, deleteOrder,clearCurrentPageOrders} = userOrderSlice.actions;
export default userOrderSlice.reducer;
