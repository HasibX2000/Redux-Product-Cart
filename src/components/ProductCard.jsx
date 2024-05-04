import React from "react";
import { useDispatch } from "react-redux";
import { addToCartHandler } from "../redux/addToCart/action";

const ProductCard = ({ productData }) => {
  const { title, productImage, price, quantity, category } = productData;
  const dispatch = useDispatch();
  const addToCartBtb = (productData) => {
    dispatch(addToCartHandler(productData));
  };

  return (
    <div className="akh-productCard">
      <img className="akh-productImage" src={productImage} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="akh-productName">{title}</h4>
        <p className="akh-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="akh-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="akh-quantity">{quantity}</span>
          </p>
        </div>
        <button
          onClick={() => addToCartBtb(productData)}
          className="akh-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
