import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <>
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="border-2 py-2 px-2 bg-clip-text text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer tracking-wider">
              Web React
            </h1>
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Home
            </li>
          </Link>
          <Link to={"/cart"}>
            <div className="relative">
              <ShoppingCartIcon className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

              {cart.length > 0 && (
                <div className="absolute bg-gray-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
