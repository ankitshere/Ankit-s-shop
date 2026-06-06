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
//    <div className="min-h-screen flex items-center justify-center px-4">
//   <form
//     onSubmit={handleSubmit(handleLogin)}
//     className="w-full max-w-md bg-gray-300 border border-blue-100 rounded-xl p-6 sm:p-8 flex flex-col gap-4"
//   >
//     <input
//       {...register("user")}
//       type="text"
//       placeholder="Username"
//       className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
//     />

//     <input
//       {...register("email")}
//       type="email"
//       placeholder="email.com"
//       className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
//     />

//     <input
//       {...register("password")}
//       type="password"
//       placeholder="Password"
//       className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
//     />

//     <button className="mt-2 h-10 w-full rounded-lg bg-gray-500 text-white font-medium hover:bg-gray-600 transition">
//       Register User
//     </button>

//     <p className="text-sm text-center">
//       Already have an Account{" "}
//       <Link className="text-blue-500" to="/login">
//         Login
//       </Link>
//     </p>
//   </form>
// </div>

<div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 flex items-center justify-center px-4">
  <form
    onSubmit={handleSubmit(handleLogin)}
    className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-xl p-6 sm:p-8"
  >
    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-slate-900">
        Create Account 🚀
      </h1>

      <p className="text-slate-500 mt-2">
        Join us and start your journey today
      </p>
    </div>

    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Username
        </label>

        <input
          {...register("user")}
          type="text"
          placeholder="Enter username"
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
          placeholder="Create a password"
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
    </div>

    <button
      type="submit"
      className="
        mt-6
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
      Register User
    </button>

    <p className="text-sm text-center text-slate-600 mt-5">
      Already have an account?{" "}
      <Link
        className="font-semibold text-indigo-600 hover:text-indigo-700"
        to="/login"
      >
        Login
      </Link>
    </p>
  </form>
</div>
  );
};

export default Register;
