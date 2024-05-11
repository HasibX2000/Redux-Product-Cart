import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto flex justify-center flex-col items-center py-60">
        <h1 className="text-3xl font-bold">Thanks For Placing Order</h1>

        <Link to="/" className="bg-blue-500 px-5 py-1 mt-5 rounded text-white">
          Go To Homepage
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
