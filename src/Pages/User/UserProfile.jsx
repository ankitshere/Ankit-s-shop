import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncDeteleuser, asynclogoutinuser, asyncupdateuser  } from '../../Store/actions/UserAction'

const UserProfile = () => {

const navigate=useNavigate();

 const {id}=useParams()
const products = useSelector((state) => state.productsreducer?.data)

const users = useSelector((state) => state.usersreducer?.user)
  console.log(users )
  const product=products?.find((product)=>product.id==id);
     
  const dispatch = useDispatch();
    const { reset, register, handleSubmit } = useForm({
      defaultValues:{
        user:users?.username,
        email:users?.email,
        password:users?.password,
              
      }
    });





const updateProfilehandler = (formData) => {
  dispatch(asyncupdateuser(users.id, formData));
};


const UpdateUserHandler = (user) => {
I
dispatch(asyncupdateuser (users.id, user));
};
const logoutUsrHandler = (user) => {
dispatch(asynclogoutinuser());
navigate("/login");
};


const DeleteProducthandler = () => {
  dispatch(asyncDeteleuser(users.id));

};

  return users ?  (
<form
  onSubmit={handleSubmit(updateProfilehandler)}
  className="w-full max-w-md mx-auto mt-6 bg-gray-300 border border-blue-100 rounded-xl p-6 sm:p-8 flex flex-col gap-4"
>
  <h2 className="text-2xl text-center font-semibold text-gray-900">
    Your Profile
  </h2>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-600">Username</label>
    <input
      {...register("username")}
      type="text"
      placeholder="Enter username"
      className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-600">Email</label>
    <input
      {...register("email")}
      type="email"
      placeholder="Enter email"
      className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-600">Password</label>
    <input
      {...register("password")}
      type="password"
      placeholder="Enter password"
      className="h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  <div className="flex flex-col sm:flex-row gap-3 mt-2">
    <button
      type="submit"
      className="flex-1 h-10 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
    >
      Update Profile
    </button>

    <button
      type="button"
      onClick={DeleteProducthandler}
      className="flex-1 h-10 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition"
    >
      Delete
    </button>
  </div>
</form>
  ): "loading"
}

export default UserProfile