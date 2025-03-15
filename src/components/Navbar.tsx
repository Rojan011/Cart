import { NavLink } from "react-router-dom";
import Container from "./Container";

export function Navbar() {
  return (
    <div className="bg-white shadow-sm mb-3 p-3 sticky top-0 z-10">
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
          <button
            className="ml-auto
          px-2 py-1  border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-500"
            style={{ width: "3rem", height: "3rem", position: "relative" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div className="rounded-full bg-red-600 text-white flex justify-center items-center w-[1.5rem] h-[1.5rem] absolute bottom-0 right-0 transform translate-x-[25%] translate-y-[25%]">
              3
            </div>
          </button>
        </div>
      </Container>
    </div>
  );
}
