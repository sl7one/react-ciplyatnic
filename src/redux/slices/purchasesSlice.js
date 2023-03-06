import { createSlice } from '@reduxjs/toolkit';

import {
  addPurchases,
  // deleteContact,
  // editContact,
  fetchPurchases,
} from './purchasesOperations';

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

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPurchases.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.orders.items = payload.data.result;
      })
      .addCase(addPurchases.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.orders.items.unshift(payload.data.result);
      })
      // .addCase(deleteContact.fulfilled, (state, { payload }) => {
      //   state.contacts.isLoading = false;
      //   state.contacts.error = null;
      //   state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload.id);
      // })
      // .addCase(editContact.fulfilled, (state, { payload }) => {
      //   state.contacts.isLoading = false;
      //   state.contacts.error = null;
      //   const index = state.contacts.items.findIndex(contact => contact.id === payload.id);
      //   state.contacts.items.splice(index, 1, payload);
      // })
      // .addCase(addContact.fulfilled, (state, { payload }) => {
      //   state.contacts.isLoading = false;
      //   state.contacts.error = null;

      //   state.contacts.items.push(payload);
      // })
      .addCase(fetchPurchases.pending, pending)
      .addCase(fetchPurchases.rejected, rejected)
      .addCase(addPurchases.pending, pending)
      .addCase(addPurchases.rejected, rejected);

    // .addCase(deleteContact.pending, pending)
    // .addCase(deleteContact.rejected, rejected)
    // .addCase(editContact.pending, pending)
    // .addCase(editContact.rejected, rejected)
    // .addCase(addContact.pending, pending)
    // .addCase(addContact.rejected, rejected);
  },
});

export default purchasesSlice.reducer;
