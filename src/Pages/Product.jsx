import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {
const products = useSelector((state) => state.productsreducer.data)
  console.log(products)
 
  const renderProducts=products.map((products,key)=>{
    return  <div key={products.id} className="w-full sm:w-[48%] md:w-[25%] bg-white border rounded shadow-sm hover:shadow-md transition p-3 flex flex-col">


  <div className="h-40 flex items-center justify-center">
    <img
      src={products.images}
      alt=""
      className="h-full object-contain"
    />
  </div>


  <h2 className="text-sm font-medium text-gray-800 mt-2 line-clamp-2">
    {products.title}
  </h2>


  <p className="text-xs text-gray-500">{products.category}</p>


  <div className="flex items-center gap-1 mt-1">
    <span className="bg-green-600 text-white text-xs px-1 rounded">
      4.3 ★
    </span>
    <span className="text-xs text-gray-500">(120)</span>
  </div>


  <div className="mt-2 flex items-center gap-2">
    <span className="text-lg font-semibold text-black">
      ₹{products.price}
    </span>
  
    <span className="text-green-600 text-sm">
      20% off
    </span>
    <Link to={`/Products/${products.id}`} className="bg-blue-600 text-white text-xs px-1 ml-8 rounded">More Details</Link>
  </div>


  <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-black text-sm py-2 rounded">
    Add to Cart
  </button>

</div>
  })
  return products.length > 0 ? (
    <div  className="flex flex-wrap gap-4 p-4 justify-center bg-gray-100">{renderProducts}</div>
  ) : "loading pROducts..."
}

export default Product