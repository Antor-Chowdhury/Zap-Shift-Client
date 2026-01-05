import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../../../components/Logo/Logo";

const Footer = () => {
  const links = (
    <>
      <Link to="#">Services</Link>
      <Link to="/coverage">Coverage</Link>
      <Link to="#">About Us</Link>
      <Link to="#">Pricing</Link>
      <Link to="#">Blog</Link>
      <Link to="#">Contact</Link>
    </>
  );

  return (
    <div className="md:max-w-[90%] mx-auto pb-12.5">
      <footer className="footer footer-horizontal bg-gray-900 footer-center  text-[#DADADA] px-5 py-10 md:p-10 md:rounded-4xl">
        <aside>
          <Logo></Logo>
          <p className="text-base">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to{" "}
            <br className="hidden md:block" /> business shipments — we deliver
            on time, every time.
          </p>
        </aside>
        <div className="flex justify-center items-center gap-9 flex-wrap font-medium text-base">
          {links}
        </div>
        <nav className="flex justify-center items-center gap-6 flex-wrap">
          <a
            href="#"
            className="bg-[#2489BE] w-9 h-9 rounded-full flex items-center justify-center text-black text-xl"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
          <a
            href="#"
            className="bg-white w-9 h-9 rounded-full flex items-center justify-center text-black text-xl"
          >
            <FaXTwitter></FaXTwitter>
          </a>
          <a
            href="#"
            className="bg-[#00B2FF] w-9 h-9 rounded-full flex items-center justify-center text-white text-xl"
          >
            <FaFacebookF></FaFacebookF>
          </a>
          <a
            href="#"
            className="bg-[#FF0000] w-9 h-9 rounded-full flex items-center justify-center text-white text-xl"
          >
            <FaYoutube></FaYoutube>
          </a>
        </nav>
        <p className="text-gray-400">© 2026 ZapShift. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
