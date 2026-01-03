import React from "react";
import {
  FaTruck,
  FaGlobe,
  FaBoxes,
  FaMoneyBillWave,
  FaBuilding,
  FaUndo,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaTruck,
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available within 4–6 hours.",
  },
  {
    id: 2,
    icon: FaGlobe,
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    highlight: true,
  },
  {
    id: 3,
    icon: FaBoxes,
    title: "Fulfillment Solution",
    desc: "Customized service with inventory management, online order processing, packaging, and after-sales support.",
  },
  {
    id: 4,
    icon: FaMoneyBillWave,
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    id: 5,
    icon: FaBuilding,
    title: "Corporate Service / Contract",
    desc: "Customized corporate logistics services including warehouse and inventory management support.",
  },
  {
    id: 6,
    icon: FaUndo,
    title: "Parcel Return",
    desc: "Reverse logistics facility allowing customers to return or exchange products with online merchants.",
  },
];

const OurServices = () => {
  return (
    <div className="md:max-w-[90%] mx-auto mb-14 md:mb-24.5">
      <div className="bg-secondary text-white px-3 py-10 md:p-24.5 text-center md:rounded-4xl">
        <h2 className="font-extrabold text-4xl mb-4">Our Services</h2>
        <p className="font-medium text-base text-[#DADADA] mb-8">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br className="hidden md:block" />{" "}
          business shipments — we deliver on time, every time.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`rounded-2xl p-8 text-center transition-all duration-300
                ${
                  item.highlight
                    ? "bg-primary text-primary-content"
                    : "bg-white text-primary-content"
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-white/80 p-4 rounded-full">
                    <Icon className="text-3xl text-[#053B3F]" />
                  </div>
                </div>

                {/* title */}
                <h3 className="font-bold text-2xl my-4">{item.title}</h3>

                {/* description */}
                <p className="font-medium text-base leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
