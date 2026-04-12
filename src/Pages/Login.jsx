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
      navigate("/");
      return;
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      action="" className='flex items-center gap-5  justify-center ap-5  flex-col '>
      <input {...register("email")} type="email" placeholder='email.com' className='outline-1 bordered ' />
      <input {...register("password")} type="password" placeholder='Password' className='outline-1 bordered ' />
      <button>login </button>


      <p>Don't have Account <Link className='text-blue-500' to="/register">Register </Link></p>
    </form>
  )
}

export default Login