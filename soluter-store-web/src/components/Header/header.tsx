"use client";

import React from "react";
import Link from "next/link";
import { useBearStore } from "@/store/store";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { numberToCurrency } from "@/utils/numberUtils";
import { signIn, useSession } from "next-auth/react";
import { useShallow } from "zustand/react/shallow";
import { fetchUser } from "@/service/user";

const Header = () => {
  const { user, updateUser, logout } = useBearStore(useShallow((state) => state));
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (session?.access_token && !user) {
      fetchUser().then((usr) => {
        updateUser({ ...usr, picture: session.user.image });
      });
    }
  }, [updateUser, session, user]);

  return (
    <header className="bg-gray-50 shadow flex content-between">
      <div className="flex w-full px-10 min-h-12 text-white bg-gradient-linear">
        <div className="me-auto px-4 py-6">
          <h1 className="font-bold">Soluter Store</h1>
        </div>
        <nav className="flex items-center">
          <ul className="flex divide-x text-xl">
            <Link href="/" className="px-4 py-2">
              Home
            </Link>
            <Link href="/Products" className="px-4 py-2">
              Produtos
            </Link>
            <Link href="/Cart" className="px-4 py-2">
              Carrinho
            </Link>
            <Link href="/Orders" className="px-4 py-2">
              Histórico
            </Link>
          </ul>
        </nav>
        <div className="flex justify-end items-center w-72">
          {status !== "authenticated" || !user ? (
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signIn("google")}
            >
              Login
            </button>
          ) : (
            <div className="bg-custom-yellow flex w-full justify-between items-center border rounded-xl h-16 overflow-ellipsis p-2">
              <Image
                className="w-10 h-10 rounded-full"
                src={user.picture}
                alt="User profile picture"
                width={100}
                height={100}
              />
              <div className="">
                <p className="text-xl text-stroke">{user.name}</p>
                <p className="text-md text-stroke">
                  {numberToCurrency(user.balance)}
                </p>
              </div>
              <ArrowLeftOnRectangleIcon
                className="w-7 h-7 text-red-600 cursor-pointer hover:bg-slate-300 rounded-full"
                onClick={logout}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
