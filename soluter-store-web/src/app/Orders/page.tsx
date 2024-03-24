"use client";

import { fetchOrders } from "@/service/orders";
import { useBearStore } from "@/store/store";
import { OrderType } from "@/types/orders";
import React from "react";
import { useShallow } from "zustand/react/shallow";
import OrderItem from "./orderItem";
import Loading from "../loading";

const Orders: React.FC = () => {
  const { user } = useBearStore(useShallow((state) => state));
  const [orders, setOrders] = React.useState<OrderType[] | null>(null);

  React.useEffect(() => {
    if (user) {
      fetchOrders(user.id)
        .then((apiResponse) => {
          setOrders(apiResponse);
        })
        .catch((error) => {
          alert(error.message || "Erro ao buscar histórico de compras");
        });
    }
  }, [user]);

  const renderOrderList = () => {
    if (orders === null) {
      return <Loading />;
    }
    if (orders.length > 0) {
      return orders.map((order) => <OrderItem key={order.id} order={order} />);
    }
    return <h3 className="p-10">Nenhum histórico de compra</h3>;
  };

  return (
    <section className="h-screen py-2 px-44 text-center">
      <h1 className="text-3xl font-bold">Histórico</h1>
      <div id="orderList">{renderOrderList()}</div>
    </section>
  );
};

export default Orders;
