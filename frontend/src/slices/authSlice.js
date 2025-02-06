/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    login: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const { login, setUsername } = authSlice.actions;
export default authSlice.reducer;
