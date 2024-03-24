"use client";

import { useBearStore } from "@/store/store";
import CartItem from "./cartItem";
import { useShallow } from "zustand/react/shallow";
import { numberToCurrency } from "@/utils/numberUtils";
import { purchaseProductsFromCart } from "@/service/purchase";
import { fetchUser } from "@/service/user";

const CartPage: React.FC = () => {
  const { updateUserBalance, productsInCart, clearCart } = useBearStore(useShallow((state) => state));

  const onFinishPurchase = () => {
    const productIds = productsInCart.map((product) => product.id);
    purchaseProductsFromCart(productIds).then(() => {
      clearCart();
      fetchUser().then((usr) => {
        updateUserBalance({ ...usr });
        alert("Compra finalizada com sucesso!");
      });
    }).catch(error => {
      alert(error.message || "Erro ao finalizar compra");
    });
  };

  return (
    <section className="h-screen py-2 px-44 text-center">
      <h1 className="text-3xl font-bold">Carrinho de compras</h1>
      <div id="cartProductList">
        {productsInCart.length > 0 ? (
          productsInCart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <h3 className="p-10">O carrinho está vazio</h3>
        )}
      </div>
      <div className="flex justify-center py-4">
        <h1 className="text-xl font-bold">
          Total: {numberToCurrency(productsInCart.length > 0 ? productsInCart.reduce((acc, curr) => acc + curr.price, 0) : 0)}
        </h1>
      </div>
      <div className="flex justify-center pb-6 gap-4">
        <button
          className="bg-red-500 hover:bg-red-700 disabled:bg-slate-600 text-white font-bold py-2 px-4 rounded"
          onClick={clearCart}
          disabled={productsInCart.length === 0}
        >
          Esvaziar carrinho
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 disabled:bg-slate-600 text-white font-bold py-2 px-4 rounded"
          onClick={onFinishPurchase}
          disabled={productsInCart.length === 0}
        >
          Finalizar compra
        </button>
      </div>
    </section>
  );
};

export default CartPage;
