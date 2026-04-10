import React from 'react'
import {  useForm} from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
const Login = () => {

  const {reset,register,handleSubmit} =useForm();

  const handleLogin=(user)=>{
    user.id=nanoid();
    console.log(user);
    reset();
    
  }

  return (
    <form 
    onSubmit={handleSubmit(handleLogin)}
    action=""   className='flex items-center justify-center ap-5 bg-red-800 flex-col '>
  <input {...register("user")} type="text"  placeholder='Username' className='outline-1 bordered '/>
  <input {...register("email")} type="email"  placeholder='email.com' className='outline-1 bordered '/>
  <input {...register("password")} type="password"  placeholder='Password' className='outline-1 bordered '/>
<button>login </button>


<p>Don't have Account <Link className='text-blue-500' to="/register">Register </Link></p>
    </form>
  )
}

export default Login