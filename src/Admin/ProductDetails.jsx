import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncDeteleProduct, asyncupdateProduct } from '../Store/actions/ProductAction'
import { ToastContainer, toast } from "react-toastify";

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
    <h2 className=" text-xl font-medium bg-gray-300 px-2 py-1 rounded-2xl" >{product?.category}</h2> 
      </div> 

      <p className="text-gray-600 font-medium">
        {product?.description}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="flex-1 bg-gray-200 py-3 rounded-xl hover:bg-gray-300">
          Add to Cart
        </button>

        <button className="flex-1 bg-yellow-400 py-3 rounded-xl font-semibold hover:bg-yellow-500">
          Buy Now
        </button>
      </div>

    </div>

  </div>
</div>

<div  className="flex justify-center py-10 px-4">
{users && users?.isAdmin &&(
   <form
    onSubmit={handleSubmit(UpdateProducthandler)}
    className="w-full max-w-110 bg-gray-200 border border-blue-100 rounded-xl p-6 sm:p-8 flex flex-col gap-4"
  > 
    <header className="mb-2">
      <h2 className="text-lg font-medium text-gray-900">Update product</h2>
      <p className="text-sm text-gray-500 mt-1">Fill in the details to update a  product.</p>
    </header>

    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Product name</span>
      <input
       {...register("title")}
        type="text"
        placeholder="e.g. Wireless Headphones"
        className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all w-full"
      />
    </label>

    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Image URL</span>
      <input
        {...register("images")}
        type="url"
        placeholder="https://example.com/image.jpg"
        className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all w-full"
      />
    </label>

    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Description</span>
      <input
        {...register("description")}
        type="text"
        placeholder="Brief product description"
        className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full"
      />
    </label>

    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Price</span>
        <input
          {...register("price")}
          type="number"
          placeholder="0.00"
          className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Category</span>
        <input
          {...register("Category")}
          type="text"
          placeholder="e.g. Electronics"
          className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full"
        />
      </label>
    </section>

    <button
      type="submit"
      className="mt-2 h-10 w-full rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 active:scale-[0.98] transition-all"
    >
      update product
    </button>
    <button
      type="button"
     onClick={() => DeleteProducthandler(asyncDeteleProduct)}
      className="mt-2 h-10 w-full rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-blue-700 active:scale-[0.98] transition-all"
    >
      Delete product
    </button>

  </form>
)}
   
</div>
</section>
  ):"loading product..."
}

export default ProductDetails