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
        user:users?.user,
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
    
<main  className='px-5   '  >
  <form
  onSubmit={handleSubmit(updateProfilehandler)}
  className="w-full  max-w-md mx-auto mt-8 bg-white border border-slate-200 rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col gap-5"
>
  <h2 className="text-3xl text-center font-bold text-slate-900 mb-2">
    Your Profile
  </h2>

  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-slate-700">
      Username
    </label>

    <input
      {...register("user")}
      type="text"
      placeholder="Enter username"
      className="h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-slate-700">
      Email
    </label>

    <input
      {...register("email")}
      type="email"
      placeholder="Enter email"
      className="h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-slate-700">
      Password
    </label>

    <input
      {...register("password")}
      type="password"
      placeholder="Enter password"
      className="h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
    />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    <button
      type="submit"
         onClick={UpdateUserHandler}
      className="h-12 rounded-xl bg-indigo-600 text-white text-sm hover:bg-blend-color-dodge font-semibold hover:bg-indigo-700 transition-all duration-300"
    >
      Update Profile
    </button>

    <button
      type="button"
      onClick={DeleteProducthandler}
      className="h-12 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-all duration-300"
    >
      Delete
    </button>
  </div>
</form>
</main>
  ): "loading"
}

export default UserProfile