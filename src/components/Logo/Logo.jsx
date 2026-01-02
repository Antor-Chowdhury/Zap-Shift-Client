import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end mb-4">
      <img src={logo} alt="" />
      <h3 className="font-extrabold text-3xl -ms-4 -mb-1">ZapShift</h3>
    </div>
  );
};

export default Logo;
