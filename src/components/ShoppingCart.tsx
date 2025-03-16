import { useShoppingCart } from "../context/ShoppingCartContext";
import { X } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  // Close the cart when clicking outside (on the backdrop)
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  return (
    <>
      {/* Bahira Katai thichyo ki banda gardine wala function */}
      {isOpen && (
        <div className="fixed inset-0 " onClick={handleBackdropClick}></div>
      )}

      {/* Shopping Cart */}
      <div
        className={`fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Your Items</h2>
          <button
            onClick={closeCart}
            className="text-gray-500 hover:text-gray-700"
          >
            <X />
          </button>
        </div>
        <div className="p-4 h-[calc(100%-4rem)] overflow-y-auto">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="text-right font-bold text-lg">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
