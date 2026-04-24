import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asynclogoutinuser } from "../Store/actions/UserAction";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usersreducer.user);

  const logouthandler = () => {
    dispatch(asynclogoutinuser());
    navigate("/");
  };

  return (
    <nav className="bg-white shadow px-6 py-4">
      
 
      <div className="flex justify-between items-center">
        
        <h1 className="font-bold text-lg">Ankit's Shop</h1>

       
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }>Home</NavLink>

          <NavLink to="/product" className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }>Product</NavLink>

          {user && user?.isAdmin && (
            <NavLink to="/admin/CreteProduct">Create Product</NavLink>
          )}

          {user ? (
            <>
              <NavLink to="/User/UserProfile">Settings</NavLink>
              <button
                onClick={logouthandler}
                className="bg-gray-600 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>

        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/product" onClick={() => setOpen(false)}>Product</NavLink>

          {user && user?.isAdmin && (
            <NavLink to="/admin/CreteProduct" onClick={() => setOpen(false)}>
              Create Product
            </NavLink>
          )}

          {user ? (
            <>
              <NavLink to="/User/UserProfile" onClick={() => setOpen(false)}>
                Settings
              </NavLink>
              <button
                onClick={logouthandler}
                className="bg-gray-600 text-white px-3 py-1 rounded w-fit"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" onClick={() => setOpen(false)}>
              Login
            </NavLink>
          )}

        </div>
      )}
    </nav>
  );
};

export default Nav;