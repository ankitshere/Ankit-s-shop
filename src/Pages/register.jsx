import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { asyncuserregister } from "../Store/actions/UserAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();

  const { reset, register, handleSubmit } = useForm();
  const Navigate = useNavigate();
  const handleLogin = (user) => {
    user.id = nanoid();
    console.log(user);
    ((user.isAdmin = false), dispatch(asyncuserregister(user)));

    Navigate("/login");
  };

  return (
    <form 
      onSubmit={handleSubmit(handleLogin)}
      action=""
      className="w-full max-w-100 ml-100 m-25 bg-gray-300 border border-blue-100 rounded-xl p-6 py-10 sm:p-8 flex flex-col gap-4"
    >
      <input
        {...register("user")}
        type="text"
        placeholder="Username"
         className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all w-full" 
      />
      <input
        {...register("email")}
        type="email"
        placeholder="email.com"
         className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all w-full" 
      />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
         className="h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all w-full" 
      />
      <button   className="mt-2 h-10 w-full rounded-lg bg-gray-500   font-medium" >register user </button>

      <p>
        Already have an Account{" "}
        <Link className="text-blue-500" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
