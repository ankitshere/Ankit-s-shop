import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asynclogoutinuser } from "../Store/actions/UserAction";
import { Search, User } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usersreducer.user);

  const logouthandler = () => {
    dispatch(asynclogoutinuser());
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/product?search=${encodeURIComponent(search.trim())}`);
  };

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    :<User />;

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
      isActive
        ? "bg-blue-50 text-blue-700"
        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 px-6 sticky top-0 z-50">
    
      <div className="flex items-center justify-between h-16">
        
        <NavLink to="/" className="text-xl font-bold text-gray-900 tracking-tight">
          <span className="text-blue-600">Ankit</span>'s Shop
        </NavLink>

        <div className="hidden md:flex items-center gap-2">
        
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus-within:border-blue-400 transition-colors"
          >
            {/* <svg
              
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>  */}
            <div className="relative">
  <Search  className=" text-gray-400 shrink-0 absolute right-2" />
            <input
              type="search"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 w-66"
            />
            </div>
           
          </form>

          <div className="w-px h-5 bg-gray-200 mx-1" />

          <NavLink to="/" className={linkClass}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </NavLink>

          <NavLink to="/product" className={linkClass}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Products
          </NavLink>

          {user?.isAdmin && (
            <NavLink to="/admin/CreteProduct" className={linkClass}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              Create Product
              <span className="text-[10px] font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                Admin
              </span>
            </NavLink>
          )}

          <div className="w-px h-5 bg-gray-200 mx-1" />

          {user ? (
            <>
              <NavLink
                to="/User/UserProfile"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive ? "bg-blue-50 text-blue-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                <div className="w-7 h-7 rounded-full bg-blue-100 border border-blue-400 flex items-center justify-center text-xs font-bold text-blue-700 shrink-0">
                  {initials}
                </div>
               Profile
              </NavLink>

              <button
                onClick={logouthandler}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 border border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors duration-150"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150"
            >
              Login
            </NavLink>
          )}
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

  
      {open && (
        <div className="md:hidden border-t border-gray-100 py-3 flex flex-col gap-1">
          {/* Mobile search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 mb-2 focus-within:border-blue-400 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 w-full"
            />
          </form>

          <p className="px-3 py-1 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
            Navigation
          </p>

          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </NavLink>

          <NavLink to="/product" className={linkClass} onClick={() => setOpen(false)}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Products
          </NavLink>

          {user?.isAdmin && (
            <NavLink to="/admin/CreteProduct" className={linkClass} onClick={() => setOpen(false)}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              Create Product
              <span className="text-[10px] font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                Admin
              </span>
            </NavLink>
          )}

          <div className="h-px bg-gray-100 my-2" />

          {user ? (
            <>
              <NavLink
                to="/User/UserProfile"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? "bg-blue-50 text-blue-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <div className="w-7 h-7 rounded-full bg-blue-100 border border-blue-400 flex items-center justify-center text-xs font-bold text-blue-700">
                  {initials}
                </div>
               Profile
              </NavLink>

              <button
                onClick={logouthandler}
                className="flex items-center justify-center gap-2 mx-0 mt-1 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-500 border border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="mt-1 text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;