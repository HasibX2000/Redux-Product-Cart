import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductGallery = () => {
  const products = useSelector((state) => state.products);

  console.log(products);
  return (
    <div className="productContainer md:w-2/3" id="akh-productContainer">
      {products.map((pd) => (
        <ProductCard key={pd.id} productData={pd} />
      ))}
    </div>
  );
};

export default ProductGallery;
