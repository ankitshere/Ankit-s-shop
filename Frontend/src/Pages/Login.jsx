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
//  <div className="w-full min-h-screen flex items-center justify-center px-4">
//   <div className="w-full max-w-md bg-gray-300 border border-blue-100 rounded-xl p-6 sm:p-8">
    
//     <form  
//       onSubmit={handleSubmit(handleLogin)}
//       className="flex flex-col gap-4"
//     >
      
//       <input
//         {...register("email")}
//         type="email"
//         placeholder="email.com"
//         className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
//       />

//       <input
//         {...register("password")}
//         type="password"
//         placeholder="Password"
//         className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
//       />

//       <button className="h-10 w-full rounded-lg bg-gray-500 text-white font-medium hover:bg-gray-600 transition">
//         Login
//       </button>

//       <p className="text-sm text-center">
//         Don't have Account?{" "}
//         <Link className="text-blue-500" to="/register">
//           Register
//         </Link>
//       </p>

//     </form>
    
//   </div>
// </div>

<div className="w-full min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-xl p-6 sm:p-8">

    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-slate-900">
        Welcome Back 👋
      </h1>
      <p className="text-slate-500 mt-2">
        Login to continue shopping
      </p>
    </div>

    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-5"
    >
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Email
        </label>

        <input
          {...register("email")}
          type="email"
          placeholder="john@example.com"
          className="
            w-full
            h-12
            px-4
            rounded-xl
            border
            border-slate-300
            bg-slate-50
            text-slate-800
            placeholder:text-slate-400
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            transition-all
          "
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Password
        </label>

        <input
          {...register("password")}
          type="password"
          placeholder="Enter your password"
          className="
            w-full
            h-12
            px-4
            rounded-xl
            border
            border-slate-300
            bg-slate-50
            text-slate-800
            placeholder:text-slate-400
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            transition-all
          "
        />
      </div>

      <button
        type="submit"
        className="
          h-12
          w-full
          rounded-xl
          bg-indigo-600
          text-white
          font-semibold
          hover:bg-indigo-700
          transition-all
          duration-300
        "
      >
        Login
      </button>

      <p className="text-sm text-center text-slate-600">
        Don't have an account?{" "}
        <Link
          className="font-semibold text-indigo-600 hover:text-indigo-700"
          to="/register"
        >
          Register
        </Link>
      </p>
    </form>
  </div>
</div>
  )
}

export default Login