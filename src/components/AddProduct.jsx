import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/action";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addProduct(data));
  };

  return (
    <div className="formContainer md:w-1/3 ml-5">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="akh-addProductForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <label htmlFor="akh-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="akh-inputName"
            type="text"
            name="title"
            {...register("name", { required: true })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="akh-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="akh-inputCategory"
            type="text"
            name="category"
            {...register("category", { required: true })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="akh-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="akh-inputImage"
            type="text"
            name="productImage"
            {...register("productImage", { required: true })}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="akh-inputPrice"
              name="price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="akh-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="akh-inputQuantity"
              name="quantity"
              {...register("quantity", { required: true })}
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
