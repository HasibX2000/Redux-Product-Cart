import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementHandler,
  incrementHandler,
  removeFromCart,
} from "../redux/carts/action";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price, category, productImage, quantity, id } = product;
  const increment = () => {
    dispatch(incrementHandler(product));
  };
  const decrement = () => {
    dispatch(decrementHandler(product));
  };

  const productRemove = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image */}
        <img className="akh-cartImage" src={productImage} alt="product" />
        {/* cart item info */}
        <div className="space-y-2">
          <h4 className="akh-cartName">{title}</h4>
          <p className="akh-cartCategory">{category}</p>
          <p>
            BDT <span className="akh-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons */}
        <div className="flex items-center space-x-4">
          <button className="akh-incrementQuantity" onClick={increment}>
            <span className="bi bi-plus-square-fill"></span>
          </button>
          <span className="akh-cartQuantity">{quantity}</span>
          <button className="akh-decrementQuantity" onClick={decrement}>
            <span className="bi bi-dash-square-fill"></span>
          </button>
        </div>
        {/* price */}
        <p className="text-lg font-bold">
          BDT{" "}
          <span className="akh-calculatedPrice">
            {parseInt(quantity * price)}
          </span>
        </p>
      </div>

      {/* delete button */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="akh-removeFromCart" onClick={productRemove}>
          <i className="text-lg text-red-400 bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
