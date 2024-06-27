export type Book = {
  id: string;
  image: string;
  title: string;
  author: string;
  minsRead: number;
  minsListen: number;
  description?: string;
  genre?: { id: string; name: string }[];
  chapters?: Chapter[];
};

export type Chapter = {
  id: string;
  title: string;
  subtitle?: string;
  audio?: string;
  data?: string;
};

export type Section = {
  id: string;
  label: string;
  icon: React.JSX.Element;
  data: Book[];
};
