import { createSlice } from '@reduxjs/toolkit';

import { addOrders, fetchOrders, removeOrder, saleOrder, updateOrder } from './ordersOperations';

const pending = state => {
  state.isLoading = true;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  orders: {
    items: [],
  },
  isLoading: false,
  error: null,
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchOrders.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.orders.items = payload.data.result;
      })
      .addCase(addOrders.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.orders.items.unshift(payload.data.result);
      })
      .addCase(updateOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const id = payload.data.result._id;

        const filtredItems = state.orders.items.filter(el => el._id !== id);

        state.orders.items = [payload.data.result, ...filtredItems];
      })
      .addCase(removeOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.orders.items = state.orders.items.filter(el => el._id !== payload.data.result._id);
      })
      .addCase(saleOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.orders.items = state.orders.items.filter(el => el._id !== payload.data.result._id);
      })
      .addCase(fetchOrders.pending, pending)
      .addCase(fetchOrders.rejected, rejected)
      .addCase(addOrders.pending, pending)
      .addCase(addOrders.rejected, rejected)
      .addCase(updateOrder.pending, pending)
      .addCase(updateOrder.rejected, rejected)
      .addCase(removeOrder.pending, pending)
      .addCase(removeOrder.rejected, rejected)
      .addCase(saleOrder.pending, pending)
      .addCase(saleOrder.rejected, rejected);
  },
});

export default ordersSlice.reducer;
