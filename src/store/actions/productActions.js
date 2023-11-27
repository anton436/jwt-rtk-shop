import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../helpers/consts';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const result = await axios.get(`${API}/products/`, config);

      return result.data;
    } catch (error) {
      throw error;
    }
  }
);
