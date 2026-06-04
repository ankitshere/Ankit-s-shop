import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#f5f5fb] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto p-6  lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center  ">
          {/* Left Content */}
          <div className="">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e9e7ff] text-[#5B4CF4] px-4 py-2 rounded-full text-sm font-medium">
              <span>✦</span>
              Trusted by 50k+ customers
            </div>

            {/* Heading */}
            <h1 className="mt-8 w-full text-3xl lg:text-6xl font-bold  text-[#111827]">
              Discover Products
            
              That
              <span className="text-[#5B4CF4]">
                Match Your         Lifestyle
              </span>
           
           
        
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-md text-lg text-slate-500 leading-relaxed">
              Experience the perfect blend of technical precision and
              aesthetic beauty. Curated collections for the modern
              minimalist.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex items-center gap-4">
              <Link to="/product" className="bg-[#5B4CF4] text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-indigo-200 hover:scale-105 transition">
                Shop Now
              </Link>

              <Link to="/product" className="border border-slate-300 px-8 py-4 rounded-full text-slate-700 font-medium hover:bg-white transition">
                Explore Collection
              </Link>
            </div>

            {/* Reviews */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/40?img=12"
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=32"
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=45"
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
              </div>

              <div>
                <div className="text-yellow-400 text-sm">
                  ★★★★★
                </div>
                <p className="text-sm text-slate-500">
                  4.9/5 from over 10k reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center  w-full  lg:justify-end">
            <div className="bg-white p-5 rounded-[28px]   shadow-sm w-full max-w-130">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1624978960894-bed9218acd39?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Headphone"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Aura Wireless 
                </h3>

                <span className="font-bold text-[#5B4CF4]">
                  $299.00
                </span>
              </div>
            </div>

            {/* Floating Purchase Card */}
            <div className="absolute -bottom-4  left-0 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 animate-bounce">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                🛍️
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Just Purchased
                </p>
                <p className="font-semibold text-slate-900">
                  Aura Wireless Pro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;