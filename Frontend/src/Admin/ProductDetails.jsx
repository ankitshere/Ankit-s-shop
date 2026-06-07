import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncDeteleProduct, asyncupdateProduct } from '../Store/actions/ProductAction'
import { ToastContainer, toast } from "react-toastify";
import Footer from '../Components/Footer'
import Product from '../Pages/Product'
import Similerproduct from '../Components/Similerproduct'

const ProductDetails = () => {

 const {id}=useParams()
const products = useSelector((state) => state.productsreducer?.data)
  console.log(products)
const users = useSelector((state) => state.usersreducer?.user)
  console.log(users )
  const product=products?.find((product)=>product.id==id);






    const dispatch = useDispatch();
   


    const { reset, register, handleSubmit } = useForm({
      defaultValues:{
        images:product?.images,
        title:product?.title,
        description:product?.description,
        price:product?.price,
        Category:product?.category,

      }
    });
    const Navigate = useNavigate();
    const UpdateProducthandler = (product ) => {
        console.log(product)
dispatch(asyncupdateProduct(id,product))
       

toast.success("Product Updated ");

        
    };
    const DeleteProducthandler = () => {
dispatch(asyncDeteleProduct(id))
       
Navigate("/product")
toast.success("Product Deleted ");

        
    };






  return product  ? (
<section>
  <div className=" bg-gray-100 p-6">
  <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md grid md:grid-cols-2 gap-8">
    
    {/* LEFT: Images */}
    <div className="flex flex-col gap-4">
      <div className="bg-gray-200 rounded-xl p-4 flex justify-center">
        <img
          src={product?.images}
          alt=""
          className="h-[300px] object-contain"
        />
      </div>

    </div>

    {/* RIGHT: Details */}
    <div className="flex flex-col gap-4">
      
      <h1 className="text-2xl font-semibold text-gray-800">
        {product?.title}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
          4 ★
        </span>
        <span className="text-gray-500 text-sm">(66 ratings)</span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-green-600 text-2xl font-bold">
          ₹ {product?.price}
        </span>
      
       
        <span className="text-green-600 font-medium">
          40% off
        </span>
      </div>

      {/* Offer */}
    <div className='flex  flex-row justify-between'>
        <p className="text-blue-600 text-2xl font-medium">
        Stocks <span className='text-gray-800 text-2xl'>:{product?.stock|| 0} </span>
      </p>
    <h2 className=" text-xl font-medium bg-gray-200 py-1     rounded-xl hover:bg-gray-300 px-2 " >{product?.category}</h2> 
      </div> 

      <p className="text-gray-600 font-medium">
        {product?.description}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="flex-1 bg-gray-200 py-3 rounded-xl hover:bg-gray-300">
          Add to Cart
        </button>

        <button className="flex-1 bg-blue-500 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:text-white">
          Buy Now
        </button>
      </div>

    </div>
  </div>

  <Similerproduct
  
   
    products={products}
  product={product}
  />

</div>

<div className="min-h-screen bg-slate-100 flex justify-center items-center px-4 sm:px-6 lg:px-8 py-8">
  {users?.isAdmin && (
    <form
      onSubmit={handleSubmit(UpdateProducthandler)}
      className="
        w-full
        max-w-md
        sm:max-w-xl
        lg:max-w-3xl
        bg-white
        rounded-2xl
        sm:rounded-3xl
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
          Update Product
        </h2>

        <p className="text-sm sm:text-base text-slate-500 mt-2">
          Update product information and manage inventory.
        </p>
      </div>

      {/* Product Name */}
      <div className="mb-5">
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
          Product Name
        </label>

        <input
          {...register("title")}
          type="text"
          placeholder="Wireless Headphones"
          className="
            w-full
            h-11 sm:h-12
            px-4
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            text-slate-800
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
        />
      </div>

      {/* Image URL */}
      <div className="mb-5">
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
          Image URL
        </label>

        <input
          {...register("images")}
          type="url"
          placeholder="https://example.com/image.jpg"
          className="
            w-full
            h-11 sm:h-12
            px-4
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            text-sm
            text-slate-800
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
        />
      </div>

      {/* Preview */}
      <div className="mb-5">
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
          Product Preview
        </label>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex justify-center">
          <img
            src={product?.images}
            alt={product?.title}
            className="h-32 sm:h-48 object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
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
            text-slate-800
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
          <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
            Price
          </label>

          <input
            {...register("price")}
            type="number"
            placeholder="₹0.00"
            className="
              w-full
              h-11 sm:h-12
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
          <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
            Category
          </label>

          <input
            {...register("category")}
            type="text"
            placeholder="Electronics"
            className="
              w-full
              h-11 sm:h-12
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

      {/* Product Summary */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-6">
        <h3 className="font-semibold text-indigo-700 mb-3">
          Current Product
        </h3>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="font-semibold text-slate-800">
              {product?.title}
            </p>

            <p className="text-sm text-slate-500">
              {product?.category}
            </p>
          </div>

          <p className="text-xl sm:text-2xl font-bold text-indigo-600">
            ₹{product?.price}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <button
          type="submit"
          className="
            h-11 sm:h-12
            rounded-xl
            bg-indigo-600
            text-white
            text-sm sm:text-base
            font-semibold
            hover:bg-indigo-700
            transition-all
          "
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={DeleteProducthandler}
          className="
            h-11 sm:h-12
            rounded-xl
            bg-red-500
            text-white
            text-sm sm:text-base
            font-semibold
            hover:bg-red-600
            transition-all
          "
        >
          Delete Product
        </button>
      </div>
    </form>
  )}
</div>

<Footer/>
</section>
  ):"loading product..."
}

export default ProductDetails



