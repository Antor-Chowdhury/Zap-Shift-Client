import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="md:max-w-[90%] mx-auto mt-3 md:mt-6 mb-8 md:mb-24.5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false} // no arrow will appear if it's false.
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide>
          <div className="relative w-full h-65 sm:h-75 md:h-105 lg:h-155">
            <img
              src={bannerImg1}
              alt="banner image 1"
              className="w-full h-full object-fill md:rounded-xl"
            />
            <div className="absolute inset-0 mt-42 ml-4 md:mt-118 md:ml-28">
              <div className="mt-5 flex gap-2 md:gap-5">
                <button className="btn px-2 md:py-6 md:px-8 border-none md:font-bold text-sm md:text-xl bg-primary rounded-3xl">
                  Track Your Parcel
                </button>
                <button className="btn px-2 md:py-6 md:px-8 bg-yellow-400 border-none md:font-bold text-sm md:text-xl rounded-xl text-white">
                  Be A Rider
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slider 2 */}
        <SwiperSlide>
          <div className="relative w-full h-65 sm:h-75 md:h-105 lg:h-155">
            <img
              src={bannerImg2}
              alt="banner image 1"
              className="w-full h-full object-fill md:rounded-xl"
            />
            <div className="absolute inset-0 mt-42 ml-4 md:mt-118 md:ml-28">
              <div className="mt-5 flex gap-2 md:gap-5">
                <button className="btn px-2 md:py-6 md:px-8 border-none md:font-bold text-sm md:text-xl bg-primary rounded-3xl">
                  Track Your Parcel
                </button>
                <button className="btn px-2 md:py-6 md:px-8 bg-yellow-400 border-none md:font-bold text-sm md:text-xl rounded-xl text-white">
                  Be A Rider
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slider 3 */}
        <SwiperSlide>
          <div className="relative w-full h-65 sm:h-75 md:h-105 lg:h-155">
            <img
              src={bannerImg3}
              alt="banner image 1"
              className="w-full h-full object-fill md:rounded-xl"
            />
            <div className="absolute inset-0 mt-42 ml-4 md:mt-110 md:ml-28">
              <div className="mt-5 flex gap-2 md:gap-5">
                <button className="btn px-2 md:py-6 md:px-8 border-none md:font-bold text-sm md:text-xl bg-primary rounded-3xl">
                  Track Your Parcel
                </button>
                <button className="btn px-2 md:py-6 md:px-8 bg-yellow-400 border-none md:font-bold text-sm md:text-xl rounded-xl text-white">
                  Be A Rider
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
