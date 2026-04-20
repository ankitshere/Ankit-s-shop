import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { asynclogoutinuser } from "../Store/actions/UserAction";

const Nav = () => {
   

  const navigate=useNavigate()

  const dispatch=useDispatch()

  const logouthandler=()=>{
    dispatch(asynclogoutinuser());
    Navigate("/")
  }
  const user = useSelector((state) => state.usersreducer.user);
  console.log(user);

  return (
    <nav className="flex justify-center item-center gap-10 p-5">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium underline" : "font-light"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium underline" : "font-light"
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium underline" : "font-light"
        }
        to="/product"
      >
        Product
      </NavLink> 
      {user ? (
        <><>
          <NavLink
            className={({ isActive }) => isActive ? "text-blue-500 font-medium underline" : "font-light"}
            to="/admin/CreteProduct"
          >
            Create Product
          </NavLink>
          <button onClick={() => logouthandler()}>logOut</button>
        </><NavLink
          className={({ isActive }) => isActive ? "text-blue-500 font-medium underline" : "font-light"}
          to="User/UserProfile"
        >
            Setings
          </NavLink></>
        
      ) : (
        <>
          {" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-medium underline" : "font-light"
            }
            to="/login"
          >
            Login
          </NavLink>
         

        </>
      )}
    </nav>
  );
};

export default Nav;
