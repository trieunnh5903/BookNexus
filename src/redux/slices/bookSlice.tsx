import { mockBook } from '@/mockData';
import { Book } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

interface BookState {
  isLoading: boolean;
  book: Book;
}
const initialState: BookState = {
  book: mockBook,
  isLoading: false,
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
