import React, { use } from "react";
import customer from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  //   console.log(reviews);

  return (
    <div className="mb-24.5">
      <div className="text-center">
        <img
          className="mx-auto mb-10"
          src={customer}
          alt="box packaging image"
        />
        <h3 className="font-extrabold text-2xl md:text-4xl  text-secondary mb-6">
          What our customers are sayings
        </h3>
        <p className="text-primary-content mb-10">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce{" "}
          <br className="hidden md:block" /> pain, and strengthen your body with
          ease!
        </p>
      </div>
      <>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // default mobile
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            scale: 0.8,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper py-8"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review?.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
