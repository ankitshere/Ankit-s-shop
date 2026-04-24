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
 <div className="w-full min-h-screen flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-gray-300 border border-blue-100 rounded-xl p-6 sm:p-8">
    
    <form  
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-4"
    >
      
      <input
        {...register("email")}
        type="email"
        placeholder="email.com"
        className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
      />

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
      />

      <button className="h-10 w-full rounded-lg bg-gray-500 text-white font-medium hover:bg-gray-600 transition">
        Login
      </button>

      <p className="text-sm text-center">
        Don't have Account?{" "}
        <Link className="text-blue-500" to="/register">
          Register
        </Link>
      </p>

    </form>
    
  </div>
</div>
  )
}

export default Login