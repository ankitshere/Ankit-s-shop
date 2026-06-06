import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncuserregister } from '../Store/actions/UserAction';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { asyncCreateProduct } from '../Store/actions/ProductAction';

const CreateProduct = () => {


    const dispatch = useDispatch();
   


    const { reset, register, handleSubmit } = useForm();
    const Navigate = useNavigate();
    const CreateProducthandler = (product) => {
        console.log(product)
        product.id = nanoid();
dispatch(asyncCreateProduct(product))
        Navigate("/product")

toast.success("Product Created ✅");
        
    };

    return (
     
<main className="min-h-screen bg-slate-100 flex justify-center items-center px-4 sm:px-6 py-8">
  <form
    onSubmit={handleSubmit(CreateProducthandler)}
    className="
      w-full
      max-w-md
      sm:max-w-xl
      lg:max-w-3xl
      bg-white
      rounded-3xl
      shadow-xl
      border
      border-slate-200
      p-5
      sm:p-8
    "
  >
    {/* Header */}
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
        Create New Product
      </h2>

      <p className="text-sm sm:text-base text-slate-500 mt-2">
        Fill in the details to add a new product.
      </p>
    </div>

    {/* Product Name */}
    <div className="mb-5">
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Product Name
      </label>

      <input
        {...register("title")}
        type="text"
        placeholder="Wireless Headphones"
        className="
          w-full
          h-12
          px-4
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />
    </div>

    {/* Image URL */}
    <div className="mb-5">
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Image URL
      </label>

      <input
        {...register("images")}
        type="url"
        placeholder="https://example.com/image.jpg"
        className="
          w-full
          h-12
          px-4
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />
    </div>

    {/* Description */}
    <div className="mb-5">
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Description
      </label>

      <textarea
        {...register("description")}
        rows={4}
        placeholder="Write product description..."
        className="
          w-full
          p-4
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          resize-none
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />
    </div>

    {/* Price & Category */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Price
        </label>

        <input
          {...register("price")}
          type="number"
          placeholder="₹0.00"
          className="
            w-full
            h-12
            px-4
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Category
        </label>

        <input
          {...register("category")}
          type="text"
          placeholder="Electronics"
          className="
            w-full
            h-12
            px-4
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
        />
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="
        w-full
        h-12
        rounded-xl
        bg-indigo-600
        text-white
        font-semibold
        hover:bg-indigo-700
        transition-all
        duration-300
      "
    >
      Create Product
    </button>
  </form>
</main>
    )
}

export default CreateProduct