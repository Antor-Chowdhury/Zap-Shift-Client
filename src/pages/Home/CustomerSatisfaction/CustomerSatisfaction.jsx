import React from "react";
import image1 from "../../../assets/location-merchant.png";
import vectorImage from "../../../assets/be-a-merchant-bg.png";

const CustomerSatisfaction = () => {
  return (
    <div className="max-w-[90%] lg:max-w-[80%] mx-auto my-12 md:my-20">
      <div
        className="
          p-6 sm:p-10 md:p-16 lg:p-20
          bg-[#03373D]
          rounded-3xl md:rounded-4xl
          flex flex-col-reverse lg:flex-row
          gap-10
          justify-evenly
          items-center
        "
        style={{
          backgroundImage: `url(${vectorImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        {/* right side */}
        <div className="text-center lg:text-left max-w-xl">
          <h3 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h3>

          <p className="text-[#DADADA] text-sm sm:text-base font-normal mb-6 md:mb-8">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <button
              className="
                px-6 py-3 sm:py-4
                bg-primary
                rounded-full
                font-bold
                text-base sm:text-lg lg:text-xl
                transition-all duration-300
                hover:bg-primary-focus
                hover:scale-105
                hover:shadow-lg
              "
            >
              Become a Merchant
            </button>

            <button
              className="
                px-6 py-3 sm:py-4
                rounded-full
                border border-primary
                text-primary
                font-bold
                text-base sm:text-lg lg:text-xl
                transition-all duration-300
                hover:bg-primary
                hover:text-white
                hover:scale-105
                hover:shadow-lg
              "
            >
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* left side */}
        <img
          src={image1}
          alt="location image"
          className="w-60 sm:w-72 md:w-80 lg:w-auto"
        />
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
