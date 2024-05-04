import React, { useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import BillingDetails from "../components/BillingDetails";

const CartPage = () => {
  useEffect(() => {
    document.title = "Cart";
  });
  return (
    <div className="flex gap-10 py-16 container mx-auto">
      <ProductDetails />
      <BillingDetails />
    </div>
  );
};

export default CartPage;
