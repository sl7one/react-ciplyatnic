import { createSlice } from '@reduxjs/toolkit';

import { fetchSalles, updateSalledOrder } from './sallesOperations';

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

export const sallesSlice = createSlice({
  name: 'salles',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchSalles.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.orders.items = payload.data.result;
      })
      .addCase(updateSalledOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.orders.items = state.orders.items.filter(el => el._id !== payload.data.result._id);
      })
      .addCase(fetchSalles.pending, pending)
      .addCase(fetchSalles.rejected, rejected)
      .addCase(updateSalledOrder.pending, pending)
      .addCase(updateSalledOrder.rejected, rejected);
    // .addCase(deleteContact.pending, pending)
    // .addCase(deleteContact.rejected, rejected)
    // .addCase(editContact.pending, pending)
    // .addCase(editContact.rejected, rejected)
    // .addCase(addContact.pending, pending)
    // .addCase(addContact.rejected, rejected);
  },
});

export default sallesSlice.reducer;
