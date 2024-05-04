import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductGallery = () => {
  const productslist = useSelector((state) => state.products);
  console.log(productslist);
  return (
    <div className="productContainer md:w-2/3" id="akh-productContainer">
      {productslist.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default ProductGallery;
