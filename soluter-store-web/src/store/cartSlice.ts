import { ProductType } from "@/types/products";
import { StateCreator } from "zustand";

export interface CartSlice {
  productsInCart: ProductType[];
  addToCart: (value: ProductType) => void;
  removeFromCart: (value: ProductType) => void;
  isProductInCart: (value: ProductType) => boolean;
  clearCart: () => void;
}

export const createCartSlice: StateCreator<CartSlice> = (set, get) => ({
  productsInCart: [],
  addToCart: (value) =>
    set((state) => ({ productsInCart: [...state.productsInCart, value] })),
  removeFromCart: (value) =>
    set((state) => ({
      productsInCart: state.productsInCart.filter(
        (product) => product.id !== value.id
      ),
    })),
  isProductInCart: (value) => get().productsInCart.includes(value),
  clearCart: () => set({ productsInCart: [] }),
});
