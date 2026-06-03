import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      name: "Sarah Jenkins",
      role: "Tech Entrepreneur",
      review:
        "The attention to detail in these products is unmatched. Truly a premium experience from unboxing to daily use. I can't recommend Ankit's Shop enough!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      name: "Marcus Lee",
      role: "Designer",
      review:
        "As a designer, I value aesthetics and functionality equally. Ankit's Shop delivers on both perfectly. The packaging alone is a work of art.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80",
      name: "Elena Rodriguez",
      role: "Marketing Exec",
      review:
        "Finally, an e-commerce platform that feels as premium as the products it sells. The customer service is just as impressive as the curation.",
    },
  ];

  return (
    <section className="bg-[#f8f8fc] py-24 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#0f172a] mb-16">
          What Our Customers Say
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100
              hover:-translate-y-3 hover:shadow-2xl hover:border-indigo-200
              transition-all duration-500 cursor-pointer group"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-transparent group-hover:ring-indigo-200 transition-all duration-500"
                />

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-600 italic leading-8 group-hover:text-gray-800 transition-colors duration-300">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;