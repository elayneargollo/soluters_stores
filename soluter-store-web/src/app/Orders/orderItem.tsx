import { numberToCurrency } from "@/utils/numberUtils";
import { OrderType } from "@/types/orders";
import Image from "next/image";
import { formatDate } from "@/utils/dateUtils";

const OrderItem = ({ order }: { order: OrderType }) => {
  
  return (
    <div className="flex justify-between bg-gray-100 p-2 m-2">
      <Image src={order.product.image} alt={order.product.name} width={96} height={96} />
      <div className="my-auto">
        <h1 className="text-xl font-bold">{order.product.name}</h1>
        <h2 className="text-lg font-bold">{numberToCurrency(order.product.price)}</h2>
      </div>    
      <div>
        <p>{formatDate(order.accomplished, true)}</p>
      </div>
    </div>
  );
};

export default OrderItem;
