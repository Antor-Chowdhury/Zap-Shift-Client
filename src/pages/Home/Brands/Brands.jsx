import React from "react";
import Marquee from "react-fast-marquee";

import casio from "../../../assets/brands/casio.png";
import amazon from "../../../assets/brands/amazon.png";
import moonStar from "../../../assets/brands/moonstar.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
import randstad from "../../../assets/brands/randstad.png";

const Brands = () => {
  return (
    <div className="max-w-[80%] mx-auto mb-14 md:mb-24.5">
      <h3 className="font-black md:font-extrabold text-lg md:text-4xl text-secondary text-center mb-15">
        We've helped thousands of sales teams
      </h3>
      <Marquee speed={100} autoFill={true}>
        <div className="flex gap-8 md:gap-20 items-center px-4 md:px-10">
          <img className="w-20 md:w-full" src={casio} alt="casio logo" />
          <img className="w-20 md:w-full" src={amazon} alt="amazon logo" />
          <img className="w-20 md:w-full" src={moonStar} alt="moon star logo" />
          <img className="w-20 md:w-full" src={star} alt="star+ logo" />
          <img
            className="w-20 md:w-full"
            src={startPeople}
            alt="star people logo"
          />
          <img className="w-20 md:w-full" src={randstad} alt="randstad logo" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
