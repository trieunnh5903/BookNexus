export type Book = {
  id: string;
  image: string;
  title: string;
  author: string;
  minsRead: number;
  minsListen: number;
  description?: string;
  genre?: { id: string; name: string }[];
  chapters?: { id: string; title: string; subtitle?: string }[];
};
