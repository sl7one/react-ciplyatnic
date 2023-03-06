import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const cyplyatnic = axios.create({
  baseURL: 'http://localhost:4300/cyplyatnic/api',
});

export const fetchOrders = createAsyncThunk('orders/fetchAll', async (_, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auhtSate.token;
    // tokenService.set(token);
    const response = await cyplyatnic.get('/orders');

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addOrders = createAsyncThunk('orders/addOrder', async (data, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auhtSate.token;
    // tokenService.set(token);

    const response = await cyplyatnic.post('/orders', data);

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const updateOrder = createAsyncThunk('orders/updateOrder', async (data, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auhtSate.token;
    // tokenService.set(token);
    // console.log(data);
    const { _id, ...payload } = data;
    const response = await cyplyatnic.post(`/orders/${_id}`, payload);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const removeOrder = createAsyncThunk('orders/removeOrder', async (id, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auhtSate.token;
    // tokenService.set(token);

    const response = await cyplyatnic.delete(`/orders/${id}`);

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const saleOrder = createAsyncThunk('orders/saleOrder', async (id, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auhtSate.token;
    // tokenService.set(token);

    const response = await cyplyatnic.patch(`/orders/${id}`);

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
