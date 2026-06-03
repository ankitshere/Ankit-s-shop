import React from "react";
import {
  Globe,
  AtSign,
  ThumbsUp,
  ArrowRight,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Ankit's Shop
            </h2>

            <p className="text-slate-300 leading-8 mb-6">
              Redefining modern e-commerce through the lens
              of luxury and minimalism.
            </p>

            <div className="flex gap-4">
              {[
                <Globe size={18} />,
                <AtSign size={18} />,
                <ThumbsUp size={18} />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center cursor-pointer hover:bg-indigo-500 hover:scale-110 transition-all duration-300"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-indigo-400 font-semibold mb-6">
              Shop
            </h3>

            <ul className="space-y-4 text-slate-300">
              {[
                "New Arrivals",
                "Best Sellers",
                "Featured Collections",
                "Categories",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer"
                >
                  <ArrowRight size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-indigo-400 font-semibold mb-6">
              Support
            </h3>

            <ul className="space-y-4 text-slate-300">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Shipping",
                "Returns",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer"
                >
                  <ArrowRight size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-indigo-400 font-semibold mb-6">
              Quick Links
            </h3>
 <div className="flex flex-col  item-center justify-between gap-3  ">
 <Link to="/Products"    className="hover:underline-blue-200">
  Products
 </Link>
 <Link to="/home">
Home
 </Link>
 <Link to="/User/UserProfile">
 Profile
 </Link>
 </div>
        
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-5     border-t border-white/10 text-center text-slate-400">
          © 2026 Ankit's Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;