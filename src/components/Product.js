import React from "react";
import { add, remove } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const addToCart = () => {
    dispatch(add(item));
    enqueueSnackbar(`Item added to your cart successfully`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      <div className="group cursor-pointer bg-white transition duration-300 ease-in flex flex-col items-center border-2 gap-3 p-4 h-[350px] mt-10 ml-5">
        <div className="h-[180px]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="truncate w-40 mt-3 text-gray-700 font-semibold text-lg">
            {item.title}
          </h1>
        </div>
        <div className="flex gap-2">
          <p>Price</p>
          <p>₹ {item.price}</p>
        </div>
        <div className="flex items-center justify-center w-full">
          {cart.some((p) => p.id === item.id) ? (
            <button
              className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gary-700 border-2 rounded-lg font-semibold p-3"
              onClick={removeFromCart}
            >
              Remove item
            </button>
          ) : (
            <button
              className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gary-700 border-2 rounded-lg font-semibold p-3"
              onClick={addToCart}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
