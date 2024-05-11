import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderHandler } from "../redux/carts/action";
import { Link } from "react-router-dom";

const BillingDetails = () => {
  const totalItems = useSelector((state) => state.carts);

  const totalPrice = totalItems.reduce(
    (total, product) => (total += product.price * product.quantity),
    0
  );

  const vat = totalPrice * 0.1;
  const dispatch = useDispatch();
  const orderPlace = () => {
    dispatch(orderHandler());
  };
  return (
    <div className="w-1/3">
      <div className="billDetailsCard">
        <h4 className="mt-2 mb-8 text-xl font-bold text-center">
          Bill Details
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p>Sub Total</p>
            <p>
              BDT <span className="akh-subtotal">{parseInt(totalPrice)}</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p>Discount</p>
            <p>
              BDT <span className="akh-discount">0</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p>VAT</p>
            <p>
              BDT <span className="vat">{vat}</span>
            </p>
          </div>

          <div className="flex items-center justify-between pb-4">
            <p className="font-bold">TOTAL `(Flatrate)`</p>
            <p className="font-bold">
              BDT{" "}
              <span className="akh-total">{parseInt(totalPrice + vat)}</span>
            </p>
          </div>
          <Link to="/order">
            <button className="placeOrderbtn" onClick={orderPlace}>
              place order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
