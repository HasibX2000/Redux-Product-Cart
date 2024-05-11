import React from "react";
import ProductInfo from "./ProductInfo";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const cartItems = useSelector((state) => state.carts);

  return (
    <div className="flex flex-col gap-10 w-2/3">
      {cartItems.map((product) => (
        <ProductInfo product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductDetails;
