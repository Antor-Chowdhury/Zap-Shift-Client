import React from "react";
import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";
import callSupport from "../../../assets/call-support-3.png";

const OurMotto = () => {
  return (
    <div className="max-w-[80%] mx-auto mb-24.5">
      <div className="border-dashed border-y py-20 flex flex-col gap-6">
        {/* card 1 */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl p-6 md:p-10 text-center md:text-left">
          {/* Image */}
          <img
            className="w-32 md:w-48"
            src={liveTracking}
            alt="live parcel tracking"
          />

          {/* Divider */}
          <span className="my-6 md:my-0 md:mx-10 h-px md:h-36 w-24 md:w-auto border-t md:border-l border-dashed border-gray-400"></span>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-extrabold text-secondary mb-3">
              Live Parcel Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment’s journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl p-6 md:p-10 text-center md:text-left">
          <img
            className="w-32 md:w-48"
            src={safeDelivery}
            alt="safe delivery image"
          />

          <span className="my-6 md:my-0 md:mx-10 h-px md:h-36 w-24 md:w-auto border-t md:border-l border-dashed border-gray-400"></span>

          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-extrabold text-secondary mb-3">
              100% Safe Delivery
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>

        {/* card 3 */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl p-6 md:p-10 text-center md:text-left">
          <img
            className="w-32 md:w-48"
            src={callSupport}
            alt="call center support"
          />

          <span className="my-6 md:my-0 md:mx-10 h-px md:h-36 w-24 md:w-auto border-t md:border-l border-dashed border-gray-400"></span>

          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-extrabold text-secondary mb-3">
              24/7 Call Center Support
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMotto;
