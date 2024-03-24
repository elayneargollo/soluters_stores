export type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  description: string;
};

export type FilterProductType = {
  name: string;
  price: string;
  description: string;
};
