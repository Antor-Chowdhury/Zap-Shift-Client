import React from "react";
import { NavLink, Outlet } from "react-router";

const AboutUs = () => {
  const links = (
    <>
      <NavLink
        to="story"
        end
        className={({ isActive }) =>
          `font-medium text-base sm:text-xl lg:text-2xl transition whitespace-nowrap
          ${isActive ? "text-primary font-extrabold" : "hover:text-[#5B6A2E]"}`
        }
      >
        Story
      </NavLink>

      <NavLink
        to="mission"
        className={({ isActive }) =>
          `font-medium text-base sm:text-xl lg:text-2xl transition whitespace-nowrap
          ${isActive ? "text-primary font-extrabold" : "hover:text-[#5B6A2E]"}`
        }
      >
        Mission
      </NavLink>

      <NavLink
        to="success"
        className={({ isActive }) =>
          `font-medium text-base sm:text-xl lg:text-2xl transition whitespace-nowrap
          ${isActive ? "text-primary font-extrabold" : "hover:text-[#5B6A2E]"}`
        }
      >
        Success
      </NavLink>

      <NavLink
        to="team"
        className={({ isActive }) =>
          `font-medium text-base sm:text-xl lg:text-2xl transition whitespace-nowrap
          ${isActive ? "text-primary font-extrabold" : "hover:text-[#5B6A2E]"}`
        }
      >
        Team & Others
      </NavLink>
    </>
  );

  return (
    <div className="max-w-[90%] mx-auto bg-white px-4 sm:px-8 lg:px-27 py-8 sm:py-14 lg:py-20 rounded-3xl mb-12 sm:mb-16">
      <div className="mb-8 sm:mb-12">
        <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-[56px] mb-3 sm:mb-4">
          About Us
        </h2>
        <p className="text-primary-content text-base sm:text-lg">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-100">
        <div className="flex gap-6 sm:gap-12 my-6 sm:my-8 overflow-x-auto scrollbar-hide">
          {links}
        </div>
      </div>

      {/* Dynamic content */}
      <div className="text-base sm:text-lg lg:text-xl text-primary-content mt-6 leading-relaxed">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutUs;
