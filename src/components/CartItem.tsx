/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";
import { Bounce, toast } from "react-toastify";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  const notifyRemovedFromCart = () => {
    toast.info(`${item.name}s Removed From The Cart`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <img
        src={item.imgUrl}
        className="w-32 h-20 object-cover"
        alt={item.name}
      />
      <div className="flex-1">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-gray-500 text-xs">x{quantity}</span>
          )}
        </div>
        <div className="text-gray-500 text-sm">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div className="text-sm">{formatCurrency(item.price * quantity)}</div>
      <button
        className="text-red-500 hover:text-red-700 border border-red-500 hover:border-red-700 rounded px-2 py-1 text-sm"
        onClick={() => {
          removeFromCart(item.id), notifyRemovedFromCart();
        }}
      >
        &times;
      </button>
    </div>
  );
}
