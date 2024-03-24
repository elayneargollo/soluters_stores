import { ProductType } from "./products";

export type OrderType = {
  id: string;
  userId: string;
  product: ProductType;
  quantity: number;
  identifier: string;
  accomplished: string;
};