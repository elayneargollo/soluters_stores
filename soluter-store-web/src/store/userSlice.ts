import { UserType } from "@/types/user";
import { signOut } from "next-auth/react";
import { StateCreator } from "zustand";

type TokenContentType = {
  id: string;
  name: string;
  email: string;
  picture: string;
  balance: number;
};

export interface UserSlice {
  user: UserType | null;
  updateUser: (tokenContent: TokenContentType) => void;
  updateUserBalance: (tokenContent: TokenContentType) => void;
  logout: () => void;
}

const updateUser = (tokenContent: TokenContentType): UserType => {
  const user : UserType = {
    id: tokenContent.id,
    name: tokenContent.name,
    email: tokenContent.email,
    picture: tokenContent.picture,
    balance: tokenContent.balance || 0,
  };

  return user;
};

const updateUserBalance = (tokenContent: TokenContentType, user: UserType | null): UserType | null => {
  if (!user) {
    return null;
  }
  return { ...user, balance: tokenContent.balance };
}

const logout = () => {
  signOut();

  return null;
};

export const createUserSlice: StateCreator<UserSlice> = (set, get) => ({
  user: null,
  updateUser: (tokenContent) => set({ user: updateUser(tokenContent) }),
  updateUserBalance: (tokenContent) => set({ user: updateUserBalance(tokenContent, get().user) }),
  logout: () => set({ user: logout() }),
});
