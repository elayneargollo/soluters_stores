import Image from "next/image";
import { ProductType } from "@/types/products";
import { numberToCurrency } from "@/utils/numberUtils";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useBearStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";

const CartItem = ({ product }: { product: ProductType }) => {
  const { removeFromCart } = useBearStore(useShallow(state => state));
  
  return (
    <div className="flex justify-between bg-gray-100 p-2 m-2">
      <Image src={product.image} alt={product.name} width={96} height={96} />
      <div className="my-auto">
        <h1 className="text-xl font-bold">{product.name}</h1>
        <h2 className="text-lg font-bold">{numberToCurrency(product.price)}</h2>
      </div>
      <div>
        <button className="border border-red-500 hover:border-red-600 cursor-pointer font-bold py-2 px-4 rounded" onClick={() => removeFromCart(product)}>
          <TrashIcon className="w-7 h-7 text-red-500 hover:text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
