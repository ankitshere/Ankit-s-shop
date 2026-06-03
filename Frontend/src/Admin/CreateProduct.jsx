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
     
<main className="flex justify-center py-2 px-4">
  <form
    onSubmit={handleSubmit(CreateProducthandler)}
    className="w-full max-w-110 bg-gray-200 border  rounded-xl p-6 sm:p-8 flex flex-col gap-4"
  >
    <header className="mb-2">
      <h2 className="text-lg font-medium text-gray-900">Create new product</h2>
      <p className="text-sm text-gray-500 mt-1">Fill in the details to add a new  product.</p>
    </header>

    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Product name</span>
      <input
       {...register("title")}
        type="text"
        placeholder="e.g. Wireless Headphones"
        className="h-9 px-3 rounded-lg border border-blue-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full"
      />
    </label>

    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Image URL</span>
      <input
        {...register("images")}
        type="url"
        placeholder="https://example.com/image.jpg"
        className="h-9 px-3 rounded-lg border border-blue-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full"
      />
    </label>

    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Description</span>
      <input
        {...register("description")}
        type="text"
        placeholder="Brief product description"
        className="h-9 px-3 rounded-lg border border-blue-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full"
      />
    </label>

    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Price</span>
        <input
          {...register("price")}
          type="number"
          placeholder="0.00"
          className="h-9 px-3 rounded-lg border border-blue-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Category</span>
        <input
          {...register("category")}
          type="text"
          placeholder="e.g. Electronics"
          className="h-9 px-3 rounded-lg border border-blue-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full"
        />
      </label>
    </section>

    <button
      type="submit"
      className="mt-2 h-10 w-full rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 active:scale-[0.98] transition-all"
    >
      Create product
    </button>

  </form>
</main>
    )
}

export default CreateProduct