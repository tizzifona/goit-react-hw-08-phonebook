import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, userLogin, userLogOut, userRegister } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleFulfilledLogOut = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handlePendingRefresh = (state) => {
  state.isRefreshing = true;
};

export const handleFulfilledRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleRejectedRefresh = (state) => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.fulfilled, handleFulfilled)
      .addCase(userLogin.fulfilled, handleFulfilled)
      .addCase(userLogOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh);
  },
});

export const authReducer = authSlice.reducer;
