import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useShoppingCart } from "../context/ShoppingCartContext";


export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="bg-white shadow-sm py-3 px-6  sticky top-0 z-10">
      <Container>
        <div className="flex gap-6 text-[20px] items-center ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-bold hover:text-gray-500"
                : "text-gray-400 hover:text-gray-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-bold hover:text-gray-500"
                : "text-gray-400 hover:text-gray-600"
            }
          >
            Store
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-bold hover:text-gray-500"
                : "text-gray-400 hover:text-gray-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-bold hover:text-gray-500"
                : "text-gray-400 hover:text-gray-600"
            }
          >
            Search
          </NavLink>
          <button
            onClick={openCart}
            className="ml-auto
          px-2 py-1  border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-500"
            style={{ width: "3rem", height: "3rem", position: "relative" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <div className={`rounded-full ${cartQuantity===0?'bg-red-600':'bg-green-600'} text-white flex justify-center items-center w-[1.5rem] h-[1.5rem] absolute bottom-0 right-0 transform translate-x-[25%] translate-y-[25%]`}>
              {cartQuantity}
            </div>
          </button>
        </div>
      </Container>
    </div>
  );
}
