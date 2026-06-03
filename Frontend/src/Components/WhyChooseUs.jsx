import React from "react";
import { Truck, ShieldCheck, BadgeCheck } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Truck size={28} />,
      title: "Fast & Free Shipping",
      description:
        "On all orders over $150. Experience the fastest delivery in the luxury market.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Payments",
      description:
        "Your security is our priority. We use 256-bit SSL encryption for all transactions.",
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Premium Quality",
      description:
        "Each product is handpicked and undergoes a rigorous 10-point quality check.",
    },
  ];

  return (
    <section className="w-full py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-10 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-3xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;