import { Book } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

interface BookState {
  isLoading: boolean;
  detailBook: Book;
}

const initialState: BookState = {
  detailBook: {
    id: 'book1',
    image: 'https://picsum.photos/700',
    title: 'Title',
    author: 'Author',
    minsRead: 12,
    minsListen: 8,
    genre: [
      { id: 'dâddsada', name: 'Personal growth' },
      { id: 'dâddssada', name: 'Culture & Society' },
      { id: 'dâddsaa', name: 'Fiction' },
      { id: 'dâddbda', name: 'Mind & Philosophy' },
    ],
    chapters: [
      {
        id: 'afds',
        title: 'Introducion',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
      },
      {
        id: 'afdss',
        title: 'Creating the ',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
      },
      {
        id: 'aafds',
        title: 'Introducion',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
      },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  isLoading: false,
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
