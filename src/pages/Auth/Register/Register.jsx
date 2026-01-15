import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  // using react form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data, e) => {
    console.log(data);
    e.target.reset();
  };

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
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className="space-y-4 sm:space-y-5"
      >
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
            className="w-full mt-1 px-3 sm:px-4 py-2.5 border rounded-lg focus:outline-none border-gray-400 text-sm sm:text-base"
          />

          {/* error handling */}
          {errors.name?.type === "required" && (
            <p className="text-red-500 text-sm">Name is required</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full mt-1 px-3 sm:px-4 py-2.5 border rounded-lg focus:outline-none border-gray-400 text-sm sm:text-base"
          />

          {/* error handling */}
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Password"
            className="w-full mt-1 px-3 sm:px-4 py-2.5 border rounded-lg focus:outline-none border-gray-400 text-sm sm:text-base"
          />

          {/* error handling */}
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-sm">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm">
              Password must be at least 6 characters long
            </p>
          )}
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
