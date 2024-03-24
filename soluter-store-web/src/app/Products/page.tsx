"use client";

import React from "react";
import ProductCard from "@/app/Products/ProductCard/productCard";
import { FilterProductType, ProductType } from "@/types/products";
import { ProductsResponse } from "@/types/apiResponse";
import Loading from "../loading";
import Filter from "./ProductFilter/productFilter";
import { fetchSearchProductList } from "@/service/products";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = React.useState<ProductType[] | null>(null);

  React.useEffect(() => {
    const initialFilter :FilterProductType = {name: '', description: '', price: ''};
    fetchSearchProductList(initialFilter).then((apiResponse: ProductsResponse) => {
      setProducts(apiResponse?.content);
    }).catch(error => {
      alert(error.message || "Erro ao buscar produtos");
    });
  }, []);

  return (
    <section className="h-screen p-2 text-center">
      <h1 className="text-3xl font-bold">Catálogo de Produtos</h1>
      <Filter setProducts={setProducts}/>
      {products === null ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap bg-gray-100">
          {products?.map((product: ProductType) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export const dynamic = "force-dynamic";

export default ProductsPage;
