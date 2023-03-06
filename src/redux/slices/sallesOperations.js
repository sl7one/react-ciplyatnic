import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const cyplyatnic = axios.create({
  baseURL: 'http://localhost:4300/cyplyatnic/api',
});

export const fetchSalles = createAsyncThunk('salles/fetchAll', async (_, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auhtSate.token;
    // tokenService.set(token);
    const response = await cyplyatnic.get('/salles');

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const updateSalledOrder = createAsyncThunk(
  'salles/updateSalledOrder',
  async (id, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auhtSate.token;
      // tokenService.set(token);
      const response = await cyplyatnic.patch(`/salles/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
