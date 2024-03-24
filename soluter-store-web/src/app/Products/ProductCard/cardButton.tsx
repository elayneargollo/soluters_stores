"use client";

import React from "react";
import { useBearStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ProductType } from "@/types/products";

interface CardButtonProps {
  product: ProductType;
}

const CardButton: React.FC<CardButtonProps> = ({ product }) => {
  const { isProductInCart, removeFromCart, addToCart } = useBearStore(
    useShallow((state) => state)
  );
  const [hovering, setHovering] = React.useState(false);

  const renderButton = () => {
    switch (true) {
      case isProductInCart(product) && hovering:
        return (
          <button
            className="border border-red-500 hover:border-red-600 text-red-500 hover:text-red-600 cursor-pointer font-bold py-2 px-4 rounded"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={() => removeFromCart(product)}
          >
            <XCircleIcon className="w-7 h-7" />
          </button>
        );
      case isProductInCart(product) && !hovering:
        return (
          <button
            className="border border-green-500 hover:border-green-600 text-green-500 hover:text-green-600 cursor-pointer font-bold py-2 px-4 rounded"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <CheckCircleIcon className="w-7 h-7" />
          </button>
        );
      default:
        return (
          <button
            className="border border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-600 cursor-pointer font-bold py-2 px-4 rounded"
            onClick={() => addToCart(product)}
          >
            <ShoppingCartIcon className="w-7 h-7" />
          </button>
        );
    }
  };

  return renderButton();
};

export default CardButton;
