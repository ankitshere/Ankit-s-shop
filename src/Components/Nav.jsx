import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
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
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-medium underline" : "font-light"
            }
            to="/admin/CreteProduct"
          >
            Create Product
          </NavLink>
        </>
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
