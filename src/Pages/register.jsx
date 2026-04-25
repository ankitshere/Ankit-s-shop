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
   <div className="min-h-screen flex items-center justify-center px-4">
  <form
    onSubmit={handleSubmit(handleLogin)}
    className="w-full max-w-md bg-gray-300 border border-blue-100 rounded-xl p-6 sm:p-8 flex flex-col gap-4"
  >
    <input
      {...register("user")}
      type="text"
      placeholder="Username"
      className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
    />

    <input
      {...register("email")}
      type="email"
      placeholder="email.com"
      className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
    />

    <input
      {...register("password")}
      type="password"
      placeholder="Password"
      className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
    />

    <button className="mt-2 h-10 w-full rounded-lg bg-gray-500 text-white font-medium hover:bg-gray-600 transition">
      Register User
    </button>

    <p className="text-sm text-center">
      Already have an Account{" "}
      <Link className="text-blue-500" to="/login">
        Login
      </Link>
    </p>
  </form>
</div>
  );
};

export default Register;
