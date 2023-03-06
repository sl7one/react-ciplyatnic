import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const categories = axios.create({
  baseURL: 'http://localhost:4300/cyplyatnic/api',
});

export const fetchCategories = createAsyncThunk('categories/fetchAll', async (_, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auhtSate.token;
    // tokenService.set(token);
    const response = await categories.get('/categories');

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
