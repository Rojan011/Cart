/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Trash2 } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  inStock: number;
};

export function StoreItem({
  id,
  name,
  price,
  imgUrl,
  inStock,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const notifyAddToCart = () => {
    toast.success(`1 ${name} Added to the Cart`, {
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

  const notifyIncreasedCart = () => {
    toast.success(`${quantity + 1} ${name}s added to cart`, {
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
  const notifyDecreasedCart = () => {
    toast.info(`${quantity - 1} ${name}s  remaining in cart`, {
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

  const notifyRemovedFromCart = () => {
    toast.info(`${name}s Removed From The Cart`, {
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
    <div className=" flex flex-col md:flex-row bg-white p-4 rounded-lg shadow-md h-full gap-6">
      {/* For the Left Part of photo */}
      <div className=" flex flex-1 flex-col gap-4 justify-center items-center">
        <img
          src={imgUrl}
          alt={name}
          className=" object-cover rounded-t-lg h-48"
        />
        <div className="flex gap-2 sm:flex lg:flex md:hidden  ">
          <img
            src={imgUrl}
            alt={name}
            className=" object-cover rounded-t-lg w-12 h-12"
          />
          <img
            src={imgUrl}
            alt={name}
            className=" object-cover rounded-t-lg w-12 h-12"
          />
          <img
            src={imgUrl}
            alt={name}
            className=" object-cover rounded-t-lg w-12 h-12"
          />
          <img
            src={imgUrl}
            alt={name}
            className=" object-cover rounded-t-lg w-12 h-12"
          />
        </div>
      </div>

      {/* For The Right Part of the card */}
      {/* div X */}
      <div className="flex-1 flex-col p-2 gap-1">
        {/* div 1 */}
        <div className="flex justify-center items-center mb-4 font-semibold text-[20px] text-[#004e89]">
          {name}
        </div>

        {/* div 2*/}
        <div className="flex items-center justify-center sm:flex-row md:flex-col lg:flex-row  gap-4 mb-4">
          {/* div 2a */}
          <div className="min-w-[100px] px-2 py-4 bg-[#f5f5dc] flex flex-1 rounded-lg justify-center items-center ">
            {formatCurrency(price)}
          </div>
          {/* div 2b */}
          <div className="flex-3 text-lime-600">Save $15 on this item</div>
        </div>

        {/* div 3 */}
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          quibusdam, maiores at harum voluptatem dolorem iste nostrum nihil ipsa
          velit.
        </p>

        {/* div 4 */}
        <div className="flex mr-auto items-center gap-2 mb-4">
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
          <div className="">{`${inStock} in Stock`}</div>
        </div>

        {/* div 5 */}
        <div>
          {quantity === 0 ? (
            <button
              className="bg-[#004e89] hover:bg-[#1A659E] text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => {
                increaseCartQuantity(id), notifyAddToCart();
              }}
            >
              + Add to Cart
            </button>
          ) : (
            <div className="flex justify-between items-center w-full">
              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    decreaseCartQuantity(id), notifyDecreasedCart();
                  }}
                  className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded hover:bg-blue-600 transition duration-100 cursor-pointer"
                >
                  -
                </button>
                <span className="text-2xl">{quantity}</span>
                <button
                  onClick={() => {
                    increaseCartQuantity(id), notifyIncreasedCart();
                  }}
                  className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded hover:bg-blue-600 transition duration-100 cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => {
                  removeFromCart(id), notifyRemovedFromCart();
                }}
                className="bg-[#ff3535] text-white px-3 py-2 rounded hover:bg-[#c70000] transition duration-300 cursor-pointer"
              >
                <Trash2 />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
