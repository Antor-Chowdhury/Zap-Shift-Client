import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="card w-full max-w-sm sm:max-w-md lg:max-w-lg bg-base-100 shadow-xl mx-auto">
      <div className="card-body p-4 sm:p-6 lg:p-8 mb-5 md:mb-2">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-2xl sm:text-3xl lg:text-4xl text-info opacity-40 mb-3 sm:mb-4" />

        {/* Review Text */}
        <p className="text-sm sm:text-base text-base-content/70 mb-4 sm:mb-6">
          {review?.review}
        </p>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-base-content/30 my-2"></div>

        {/* Profile */}
        <div className="flex items-center gap-2 sm:gap-3 mt-2">
          <div className="avatar">
            <div className="w-10 sm:w-12 rounded-full bg-primary">
              <div className="flex items-center justify-center h-full text-primary-content font-bold text-base sm:text-lg">
                <img src={review?.user_photoURL} alt="" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-base text-base-content">
              {review?.userName}
            </h3>
            <p className="text-xs sm:text-sm text-base-content/60">
              {review?.jobTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
