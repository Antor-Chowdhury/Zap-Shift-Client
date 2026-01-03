import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWorks";
import OurServices from "../OurService/OurServices";
import Brands from "../Brands/Brands";
import OurMotto from "../OurMotto/OurMotto";
import Reviews from "../Reviews/Reviews";
import CustomerSatisfaction from "../CustomerSatisfaction/CustomerSatisfaction";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <OurMotto></OurMotto>
      <CustomerSatisfaction></CustomerSatisfaction>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
