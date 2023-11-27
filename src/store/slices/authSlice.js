import { createSlice } from '@reduxjs/toolkit';
import { register, login } from '../actions/authActions';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state) => {
      state.loading = false;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
