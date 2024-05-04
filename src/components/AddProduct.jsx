import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/addProducts/action";
import { useState } from "react";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  const addProductsHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
  };

  return (
    <div className="formContainer md:w-1/3 ml-5">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="akh-addProductForm"
        onSubmit={addProductsHandler}
      >
        <div className="space-y-2">
          <label htmlFor="akh-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="akh-inputName"
            type="text"
            required
            onChange={inputChangeHandler}
            name="title"
            value={productData.title}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="akh-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="akh-inputCategory"
            type="text"
            required
            onChange={inputChangeHandler}
            name="category"
            value={productData.category}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="akh-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="akh-inputImage"
            type="text"
            required
            onChange={inputChangeHandler}
            name="productImage"
            value={productData.productImage}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="akh-inputPrice"
              required
              onChange={inputChangeHandler}
              name="price"
              value={productData.price}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="akh-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="akh-inputQuantity"
              required
              name="quantity"
              onChange={inputChangeHandler}
              value={productData.quantity}
            />
          </div>
        </div>
        <button type="submit" id="akh-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
