import React, { useEffect } from "react";
import ProductGallery from "../components/ProductGallery";
import AddProduct from "../components/AddProduct";

const Homepage = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <div className="flex flex-col md:flex-row py-16 container mx-auto gap-3 items-start">
      <ProductGallery />
      <AddProduct />
    </div>
  );
};

export default Homepage;
