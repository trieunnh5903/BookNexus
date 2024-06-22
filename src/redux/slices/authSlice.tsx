import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoading: boolean;
  isSignout: boolean;
  userToken: null | string;
}

const initialState: AuthState = {
  isLoading: false,
  isSignout: false,
  userToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ userToken: string }>) => {
      state.isSignout = false;
      state.userToken = action.payload.userToken;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn } = authSlice.actions;

export default authSlice.reducer;
