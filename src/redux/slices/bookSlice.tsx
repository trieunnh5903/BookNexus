import { mockBook } from '@/mockData';
import { Book, Chapter } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface BookState {
  isLoading: boolean;
  detailBook: Book;
  nowPlaying?: Chapter;
}
const initialState: BookState = {
  nowPlaying: undefined,
  detailBook: mockBook,
  isLoading: false,
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    changeNowPlaying: (state, action: PayloadAction<Chapter>) => {
      state.nowPlaying = action.payload;
    },
  },
});

export const { changeNowPlaying } = bookSlice.actions;

export default bookSlice.reducer;
