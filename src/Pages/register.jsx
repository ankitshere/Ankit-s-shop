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
      className="flex items-center justify-center ap-5 bg-red-800 flex-col "
    >
      <input
        {...register("user")}
        type="text"
        placeholder="Username"
        className="outline-1 bordered "
      />
      <input
        {...register("email")}
        type="email"
        placeholder="email.com"
        className="outline-1 bordered "
      />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="outline-1 bordered "
      />
      <button>register user </button>

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
