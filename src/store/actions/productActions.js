import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../helpers/consts';
import { getConfig } from '../../helpers/functions';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    try {
      const result = await axios.get(
        `${API}/products/` + window.location.search,
        getConfig()
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async () => {
    try {
      const result = await axios.get(`${API}/category/list/`, getConfig());
      return result.data.results;
    } catch (error) {
      throw error;
    }
  }
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (newProduct) => {
    try {
      await axios.post(`${API}/products/`, newProduct, getConfig());
    } catch (error) {
      throw error;
    }
  }
);
