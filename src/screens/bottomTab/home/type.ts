import { Book } from '@/types';

export type Section = {
  id: string;
  label: string;
  icon: React.JSX.Element;
  data: Book[];
};
