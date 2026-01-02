import React from "react";
import {
  FaTruckPickup,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";

const HowItWorks = () => {
  const items = [
    {
      id: 1,
      icon: FaTruckPickup,
      tag: "Booking Pick & Drop",
      description:
        "Schedule hassle-free pickup and drop-off services for your parcels with flexible timing and real-time tracking.",
    },
    {
      id: 2,
      icon: FaMoneyBillWave,
      tag: "Cash On Delivery",
      description:
        "Collect payments securely upon delivery and get fast settlements directly to your account without complications.",
    },
    {
      id: 3,
      icon: FaWarehouse,
      tag: "Delivery Hub",
      description:
        "Access our strategically located delivery hubs to ensure faster processing, sorting, and last-mile delivery.",
    },
    {
      id: 4,
      icon: FaBuilding,
      tag: "Booking SME & Corporate",
      description:
        "Tailored logistics solutions for SMEs and corporate clients with bulk delivery support and dedicated assistance.",
    },
  ];

  return (
    <div className="max-w-[80%] mx-auto mb-24.5">
      <h2 className="font-extrabold text-3xl mb-8 text-[#03373D]">
        How it Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="p-5 md:p-8 gap-6 bg-white rounded-2xl"
            >
              {/* Icon */}
              <Icon className="text-5xl text-gray-600" />

              {/* Heading */}
              <h2 className="font-bold text-xl my-3 md:mt-6 mb-4">
                {item.tag}
              </h2>

              {/* Description */}
              <p className="font-medium text-base text-primary-content">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
