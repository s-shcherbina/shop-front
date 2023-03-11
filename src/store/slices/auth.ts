import { createSlice } from '@reduxjs/toolkit';
import { IAuthState, IUser } from '../../types';

const initialState: IAuthState = {
  user: {} as IUser,
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLogged = true;
      // console.log('action', action.payload);
      // console.log('user', state.user);
      // console.log('logged', state.isLogged);
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
