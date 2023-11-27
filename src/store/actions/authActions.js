import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../helpers/consts';

export const register = createAsyncThunk('auth/register', async (newUser) => {
  try {
    await axios.post(`${API}/account/register/`, newUser);
  } catch (error) {
    throw error;
  }
});

export const login = createAsyncThunk('auth/login', async (userData) => {
  try {
    const result = await axios.post(`${API}/account/login/`, userData);
    localStorage.setItem('tokens', JSON.stringify(result.data));
    localStorage.setItem('email', userData.email);

    return userData.email;
  } catch (error) {
    throw error;
  }
});
