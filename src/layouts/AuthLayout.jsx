import React from "react";
import { Outlet } from "react-router";
import Logo from "../components/Logo/Logo";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT SIDE (FORM) */}
      <div className="w-full lg:w-1/2 flex flex-col px-4 sm:px-8 md:px-12 lg:px-20">
        {/* Logo */}
        <div className="py-8 sm:py-10 mb-10 md:mb-0">
          <Logo />
        </div>

        {/* Form Area */}
        <div className="flex md:flex-1 items-center justify-center lg:justify-start lg:ml-20">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (IMAGE) */}
      <div className="hidden lg:flex w-1/2 bg-[#FAFDF0] items-center justify-center">
        <img
          src={authImage}
          alt="Authentication"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-105"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
