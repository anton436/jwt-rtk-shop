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
