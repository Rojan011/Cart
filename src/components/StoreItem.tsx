import { Trash2 } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 1;
  return (
    // Making A Card Component

    <div className="flex flex-col items-center gap-3 bg-white  p-2">
      {/* img */}
      <img
        src={imgUrl}
        alt="Image"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      {/* Bicha ko kura haru */}
      <div className="flex justify-between w-full items-baseline mb-4">
        <span className="text-2xl">{name}</span>
        <span className="ml-2 text-gray-500">{formatCurrency(price)}</span>
      </div>

      {/* add to cart ko kura haru */}

      <div className="mt-auto ">
        {quantity === 0 ? (
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-100">
            +Add to Cart
          </button>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-5">
              <button className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded hover:bg-blue-600 transition duration-100 cursor-pointer">
                -
              </button>
              <span className="text-2xl">{quantity}</span>
              <button className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded  hover:bg-blue-600 transition duration-100 cursor-pointer">
                +
              </button>
            </div>
            <button className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600 transition duration-300 cursor-pointer">
            <Trash2 />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
