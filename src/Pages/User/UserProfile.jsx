import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncupdateuser } from '../../Store/actions/UserAction'

const UserProfile = () => {



 const {id}=useParams()
const products = useSelector((state) => state.productsreducer?.data)
  console.log(products)
const users = useSelector((state) => state.usersreducer?.user)
  console.log(users )
  const product=products?.find((product)=>product.id==id);






    const dispatch = useDispatch();
   


    const { reset, register, handleSubmit } = useForm({
      defaultValues:{
        username:users?.username,
        email:users?.email,
        password:users?.password,

      }
    });

    // const Navigate = useNavigate();
    const updateProfilehandler = (user) => {
        console.log(users)
dispatch(asyncupdateuser(users.id,users))
       
    }

        
//     }; 
//     const DeleteProducthandler = () => {
// dispatch(asyncDeteleProduct(id))
       
// // Navigate("/product")
// // toast.success("Product Deleted ");

        
//     };

const UpdateUserHandler = (user) => {
I
dispatch(asyncupdateuser (users.id, user));
};


const DeleteHandler = () => {
navigate("/products");
};

  return users ?  (
      <form
        onSubmit={handleSubmit(updateProfilehandler)}
        className="w-full max-w-110 bg-gray-200 border border-blue-100 rounded-xl p-6 sm:p-8 flex flex-col gap-4"
      > 
        <header className="mb-2">
          <h2 className="text-2xl  text-center font-medium text-gray-900">Your  Profile</h2>
        </header>
    
        <label className="flex flex-col gap-1.5">
          <span className="text-md font-medium text-gray-500  tracking-wide">Username </span>
          <input
           {...register("username")}
            type="text"
            placeholder="Enter your username"
            className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all w-full"
          />
          <span className="text-md font-medium text-gray-500 tracking-wide">Email adress</span>
          <input
           {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all w-full"
          />
          <span className="text-md font-medium text-gray-500 tracking-wide">password</span>
          <input
           {...register("password")}
            type="password"
            placeholder="Enter your password"
            className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all w-full"
          />
        </label>
    
        
    
    
        
    
        <button

        
         onClick={() => updateProfilehandler(asyncupdateuser)}
          type="submit"
          className="mt-2 h-10 w-full rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 active:scale-[0.98] transition-all"
        >
          update profile
        </button>
        <button
          type="button"
         onClick={() => DeleteProducthandler(asyncDeteleProduct)}
          className="mt-2 h-10 w-full rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-blue-700 active:scale-[0.98] transition-all"
        >
          Delete profile
        </button>
    
      </form>
  ): "loading"
}

export default UserProfile