import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const AuthWrapper = ({ children }) => {

  const { user } = useSelector((state) => state.usersreducer)

  // 🔥 loading state → dummy UI
  if (user === undefined) {
    return (
  <div  className="flex flex-wrap gap-4 p-4 justify-center bg-gray-100">
        <div       className="w-full sm:w-[48%] md:w-[25%] bg-white border rounded shadow-sm hover:shadow-md transition p-3 flex flex-col">


  <div className="h-40 flex items-center justify-center">
    <img
      src="https://www.forever52.in/cdn/shop/files/FLF012-1_346c5503-6995-49ec-b40b-b0e1670a0b5b.jpg?v=1769490601&width=1780"
      alt=""
      className="h-full object-contain"
    />
  </div>


  <h2 className="text-sm font-medium text-gray-800 mt-2 line-clamp-2">
    Forever25
  </h2>


  <p className="text-xs text-gray-500">Beauty Product</p>


  <div className="flex items-center gap-1 mt-1">
    <span className="bg-green-600 text-white text-xs px-1 rounded">
      4.3 ★
    </span>
    <span className="text-xs text-gray-500">(120)</span>
  </div>


  <div className="mt-2 flex items-center gap-2">
    <span className="text-lg font-semibold text-black">
      ₹2222
    </span>
  
    <span className="text-green-600 text-sm">
      20% off
    </span>
    <button type="button" className="bg-blue-600 text-white text-xs px-1 ml-8 rounded">More Details</button>
  </div>


  <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-black text-sm py-2 rounded">
    Add to Cart
  </button>

</div>
        <div       className="w-full sm:w-[48%] md:w-[25%] bg-white border rounded shadow-sm hover:shadow-md transition p-3 flex flex-col">


  <div className="h-40 flex items-center justify-center">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTll3zQg-JVeob-Om4_Cpcty6XoflNKufLy8w&s"
      alt=""
      className="h-full object-contain"
    />
  </div>


  <h2 className="text-sm font-medium text-gray-800 mt-2 line-clamp-2">
    beauty plus+
  </h2>


  <p className="text-xs text-gray-500">Beauty Product</p>


  <div className="flex items-center gap-1 mt-1">
    <span className="bg-green-600 text-white text-xs px-1 rounded">
      4.2 ★
    </span>
    <span className="text-xs text-gray-500">(120)</span>
  </div>


  <div className="mt-2 flex items-center gap-2">
    <span className="text-lg font-semibold text-black">
      ₹999
    </span>
  
    <span className="text-green-600 text-sm">
      20% off
    </span>
    <button type="button" className="bg-blue-600 text-white text-xs px-1 ml-8 rounded">More Details</button>
  </div>


  <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-black text-sm py-2 rounded">
    Add to Cart
  </button>

</div>
  </div>
    )
  }

  return user ? children : <Navigate to="/login" />
}

export default AuthWrapper;