import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Lunar Timepiece",
      description: "Leather & Sapphire",
      price: "$185.00",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
    },
    {
      id: 2,
      name: "Optic M1",
      description: "Retro Digital Series",
      price: "$850.00",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
    {
      id: 3,
      name: "Soleil Shades",
      description: "UV400 Protected",
      price: "$120.00",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    },
    {
      id: 4,
      name: "Swift Runner",
      description: "Performance Athletics",
      price: "$145.00",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
  ];

  return (
    <section className="px-6 md:px-14 py-16 bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Products
          </h2>
          <p className="text-slate-600 mt-2">
            Handpicked essentials for your daily routine.
          </p>
        </div>

        <Link
          to="/product"
          className="text-indigo-600 text-center   shadow:md  font-medium  border border-blue-400 text-[15px] hover:bg-blue-500      hover:ease-linear  hover:text-white  rounded-2xl px-2 py-1"
        >
          View All →
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} >
          
            <div className="overflow-hidden rounded-3xl bg-white">
                  <Link to={"/product"}>      <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover hover:scale-105 transition duration-300"
              /></Link>
         
            </div>

            <h3 className="mt-5 text-3xl font-semibold text-slate-900">
              {product.name}
            </h3>

            <p className="text-slate-600 mt-1">
              {product.description}
            </p>

            <p className="mt-3 text-xl font-bold text-indigo-600">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;