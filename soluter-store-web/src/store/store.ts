import { create } from "zustand";
import { UserSlice, createUserSlice } from "./userSlice";
import { CartSlice, createCartSlice } from "./cartSlice";

export const useBearStore = create<UserSlice & CartSlice>()((...args) => ({
  ...createCartSlice(...args),
  ...createUserSlice(...args),
}))