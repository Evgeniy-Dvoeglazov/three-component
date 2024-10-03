export interface IData {
  id: string;
  name: string;
  description: string;
  children: IData[];
  image: string;
  isVisible: boolean;
  open: boolean;
  text: string;
}
