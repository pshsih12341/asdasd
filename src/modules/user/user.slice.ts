import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAccesToken } from './user.thunk';

export interface User {
  auth: boolean;
  access_token: string | null;
  refresh_token: string | null;
  id_token: string | null;
  expires_in: number | null;
  user_id: number | null;
  state: string | null;
  scope: string | null;
  device_id: string | null;
  code: string | null;
}

interface UserState {
  data: User | null;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.data = action.payload;
    },
    clearUser(state) {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccesToken.fulfilled, (state, action) => {
        state.data = { ...state.data, ...action.payload };
      })
      .addCase(getAccesToken.rejected, (state, action) => {
        state.error = action.error.message || 'Неизвестная ошибка';
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
