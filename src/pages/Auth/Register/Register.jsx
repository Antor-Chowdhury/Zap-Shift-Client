import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-2">
        Create an Account
      </h2>
      <p className="mb-6 text-gray-500 text-sm sm:text-base">
        Register with ZapShift
      </p>

      {/* Form */}
      <form className="space-y-4 sm:space-y-5">
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full mt-1 px-3 sm:px-4 py-2.5 border rounded-lg focus:outline-none border-gray-400 text-sm sm:text-base"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full mt-1 px-3 sm:px-4 py-2.5 border rounded-lg focus:outline-none border-gray-400 text-sm sm:text-base"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full mt-1 px-3 sm:px-4 py-2.5 border rounded-lg focus:outline-none border-gray-400 text-sm sm:text-base"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <a
            href="#"
            className="text-xs sm:text-sm text-gray-500 hover:text-lime-500"
          >
            Forget Password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-lime-500 text-black font-semibold py-2.5 rounded-lg transition text-sm sm:text-base"
        >
          Login
        </button>
      </form>

      {/* Login link */}
      <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
        Don’t have any account?{" "}
        <span className="text-lime-500 font-medium cursor-pointer">Login</span>
      </p>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="px-3 text-xs sm:text-sm text-gray-400">Or</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Google Register */}
      <button className="w-full flex items-center justify-center gap-2 rounded-lg py-2.5 bg-gray-200 transition text-sm sm:text-base">
        <FcGoogle size={20} />
        <span className="font-medium text-gray-700">Register with google</span>
      </button>
    </div>
  );
};

export default Register;
