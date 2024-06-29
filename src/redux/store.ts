import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import bookSlice from './slices/bookSlice';
import audioPlayerSlice from './slices/audioPlayerSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    book: bookSlice,
    audioPlayer: audioPlayerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
