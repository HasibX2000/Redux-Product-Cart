import React from "react";

const ProductInfo = () => {
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image */}
        <img
          className="akh-cartImage"
          src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="product"
        />
        {/* cart item info */}
        <div className="space-y-2">
          <h4 className="akh-cartName">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
          </h4>
          <p className="akh-cartCategory">Men's clothing</p>
          <p>
            BDT <span className="akh-cartPrice">1100</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons */}
        <div className="flex items-center space-x-4">
          <button className="akh-incrementQuantity">
            <span class="bi bi-plus-square-fill"></span>
          </button>
          <span className="akh-cartQuantity">2</span>
          <button className="akh-decrementQuantity">
            <span class="bi bi-dash-square-fill"></span>
          </button>
        </div>
        {/* price */}
        <p className="text-lg font-bold">
          BDT <span className="akh-calculatedPrice">2200</span>
        </p>
      </div>

      {/* delete button */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="akh-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
