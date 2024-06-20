export type Section = {
  id: string;
  label: string;
  icon: React.JSX.Element;
  data: Book[];
};

export type Book = {
  id: string;
  image: string;
  title: string;
  author: string;
  minsRead: number;
  minsListen: number;
};
