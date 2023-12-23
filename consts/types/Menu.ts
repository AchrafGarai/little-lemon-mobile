export type Menu = {
  menu?: MenuItem[] | null;
};
export type MenuItem = {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};
