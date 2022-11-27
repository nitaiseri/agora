import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isManager:false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isManager = true;
    },

    logout: (state) => {
      state.isManager = false;
    },
  },
});

export const { login,logout } = authSlice.actions;

export const selectIsManager = (state) => state.auth.isManager;

export default authSlice.reducer;
