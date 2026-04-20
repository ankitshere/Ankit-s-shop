import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncloginuser } from '../Store/actions/UserAction';
import { useDispatch } from 'react-redux';
const Login = () => {
  const { reset, register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    console.log(user);
    const result =  dispatch(asyncloginuser(user));

    if (result) {
      reset();
      navigate("/product");
      return;
    }
  }

  return (
     <div className="w-full max-w-100 ml-100 m-25 bg-gray-300 border border-blue-100 rounded-xl p-6 py-10 sm:p-8 flex flex-col gap-4">
      <form  
      onSubmit={handleSubmit(handleLogin)}
      action="" className='flex items-center gap-5  justify-center ap-5  flex-col '>
      <input {...register("email")} type="email" placeholder='email.com' className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all w-full" />
      <input {...register("password")} type="password" placeholder='Password' className="h-9 px-3 rounded-lg border border-gray-200 bg-white font-medium text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all w-full" />
      <button className="mt-2 h-10 w-full rounded-lg bg-gray-500   font-medium">login </button>


      <p>Don't have Account <Link className='text-blue-500' to="/register">Register </Link></p>
    </form>
     </div>
  )
}

export default Login