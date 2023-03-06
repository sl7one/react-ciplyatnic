import { createSlice } from '@reduxjs/toolkit';

import {
  // addContact,
  // deleteContact,
  // editContact,
  fetchCategories,
} from './categoriesOperations';

const pending = state => {
  state.categories.isLoading = true;
};
const rejected = (state, action) => {
  state.categories.isLoading = false;
  state.categories.error = action.payload;
};

const initialState = {
  categories: {
    items: {},
    isLoading: false,
    error: null,
  },
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories.isLoading = false;
        state.categories.error = null;
        state.categories.items = payload.data.result;
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
      .addCase(fetchCategories.pending, pending)
      .addCase(fetchCategories.rejected, rejected);
    // .addCase(deleteContact.pending, pending)
    // .addCase(deleteContact.rejected, rejected)
    // .addCase(editContact.pending, pending)
    // .addCase(editContact.rejected, rejected)
    // .addCase(addContact.pending, pending)
    // .addCase(addContact.rejected, rejected);
  },
});

export default categoriesSlice.reducer;
