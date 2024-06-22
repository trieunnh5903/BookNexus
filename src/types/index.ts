export type Book = {
  id: string;
  image: string;
  title: string;
  author: string;
  minsRead: number;
  minsListen: number;
  description?: string;
  chapters?: [];
};
