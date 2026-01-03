import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWorks";
import OurServices from "../OurService/OurServices";
import Brands from "../Brands/Brands";
import OurMotto from "../OurMotto/OurMotto";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <OurMotto></OurMotto>
    </div>
  );
};

export default Home;
