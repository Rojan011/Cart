import { Trash2 } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-md h-full">
      {/* Image */}
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Name & Price */}
      <div className="flex justify-between w-full items-center mb-4">
        <span className="text-xl font-semibold">{name}</span>
        <span className="text-gray-500">{formatCurrency(price)}</span>
      </div>

      {/* Add to Cart / Quantity Controls */}
      <div className="mt-auto w-full">
        {quantity === 0 ? (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add to Cart
          </button>
        ) : (
          <div className="flex justify-between items-center w-full">
            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseCartQuantity(id)}
                className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded hover:bg-blue-600 transition duration-100 cursor-pointer"
              >
                -
              </button>
              <span className="text-2xl">{quantity}</span>
              <button
                onClick={() => increaseCartQuantity(id)}
                className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded hover:bg-blue-600 transition duration-100 cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
            onClick={() => removeFromCart(id)} className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-300 cursor-pointer">
              <Trash2 />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
