import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductGallery = () => {
  const productsList = useSelector((state) => state.products);
  return (
    <div className="productContainer md:w-2/3" id="akh-productContainer">
      {productsList.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default ProductGallery;
