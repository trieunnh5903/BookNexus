import { Chapter } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AudioPlayerState = {
  nowPlaying?: Chapter;
};

const initialState: AudioPlayerState = {
  nowPlaying: undefined,
};

const audioPlayerSlice = createSlice({
  name: 'audioPlayerSlice',
  initialState,
  reducers: {
    changeNowPlaying: (state, action: PayloadAction<{ chapter: Chapter }>) => {
      state.nowPlaying = action.payload.chapter;
    },
  },
});
export const { changeNowPlaying } = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;
