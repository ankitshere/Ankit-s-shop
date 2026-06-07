import React from "react";
import { useNavigate } from "react-router-dom";

const Similerproduct = ({ products, product }) => {
  const navigate = useNavigate();

  const similarProducts = products?.filter(
    (item) =>
      item.category === product?.category &&
      item.id !== product?.id
  );

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">
        Similar Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarProducts?.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <img
              src={item.images}
              alt={item.title}
              className="h-48 w-full object-contain"
            />

            <h3 className="mt-3 font-semibold">
              {item.title}
            </h3>

            <p className="text-green-600 font-bold">
              ₹{item.price}
            </p>

            <button
              onClick={() => navigate(`/product/${item.id}`)}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded"
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Similerproduct;