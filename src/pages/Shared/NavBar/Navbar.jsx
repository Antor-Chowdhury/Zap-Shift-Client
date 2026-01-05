import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `nav-link font-medium 
     ${
       isActive
         ? "active py-2.5 px-4.5 bg-primary rounded-full"
         : "py-2.5 px-4.5 hover:bg-primary hover:rounded-3xl"
     }`
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/coverage"
        className={({ isActive }) =>
          `nav-link font-medium 
     ${
       isActive
         ? "active py-2.5 px-4.5 bg-primary rounded-full"
         : "py-2.5 px-4.5 hover:bg-primary hover:rounded-3xl"
     }`
        }
      >
        Coverage
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          `nav-link font-medium  
     ${
       isActive
         ? "active py-2.5 px-4.5 bg-primary rounded-full"
         : "py-2.5 px-4.5 hover:bg-primary hover:rounded-3xl"
     }`
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          `nav-link font-medium 
     ${
       isActive
         ? "active py-2.5 px-4.5 bg-primary rounded-full"
         : "py-2.5 px-4.5 hover:bg-primary hover:rounded-3xl"
     }`
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="blog"
        className={({ isActive }) =>
          `nav-link font-medium  
     ${
       isActive
         ? "active py-2.5 px-4.5 bg-primary rounded-full"
         : "py-2.5 px-4.5 hover:bg-primary hover:rounded-3xl"
     }`
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `nav-link font-medium 
     ${
       isActive
         ? "active py-2.5 px-4.5 bg-primary rounded-full"
         : "py-2.5 px-4.5 hover:bg-primary hover:rounded-3xl"
     }`
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <div className="max-w-[92%] md:max-w-[90%] mx-auto py-6 sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm rounded-xl pt-2.5 md:px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-primary-content font-medium text-base gap-9">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
