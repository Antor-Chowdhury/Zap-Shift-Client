import React from "react";
import error from "../../assets/404.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="max-w-[90%] mx-auto bg-white rounded-3xl mb-10 sm:mb-16">
      <div className="flex flex-col justify-center items-center py-8 md:py-20 text-center px-2.5">
        <figure>
          <img className="h-70 md:h-100" src={error} alt="Not Found" />
        </figure>
        <h2 className="text-3xl md:text-5xl font-bold text-[#001931]">
          Oops, page not found!
        </h2>
        <p className="my-4 text-lg md:text-xl text-[#627382]">
          The page you are looking for is not available.
        </p>
        <Link to="/" className="w-max mx-auto ">
          <button className="cursor-pointer font-semibold bg-primary py-3 md:py-3.5 px-6 text-black rounded-md">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
