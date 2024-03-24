"use client";

import { ProductType } from "@/types/products";
import { numberToCurrency } from "@/utils/numberUtils";
import Image from "next/image";
import React from "react";
import CardButton from "./cardButton";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      key={product.id}
      className="flex flex-col justify-between h-96 w-72 rounded-lg p-7 bg-white m-3 hover:shadow-md"
    >
      <Image
        className="mx-auto p-3"
        src={product.image || ""}
        alt={product.name}
        width={"120"}
        height={"150"}
      />
      <hr />
      <p className="text-2xl font-bold text-black p-2">{product.name}</p>
      <p className="text-sm text-left p-1 text-gray-600">
        {product.description}
      </p>
      <div className="flex justify-between">
        <p className="text-xl text-gray-700 text-left p-1">
          {numberToCurrency(product.price)}
        </p>
        <CardButton product={product}/>
      </div>
    </div>
  );
};

export default ProductCard;
