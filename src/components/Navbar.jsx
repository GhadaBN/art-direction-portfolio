import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed z-20 top-0 h-[12vh] w-full overflow-hidden flex items-center justify-between px-4 py-4 mb-4 mt-1 mx-1">
      <div className="logo-container h-full w-auto">
        <Link to="/">
          <img
            src={assets.logo_black}
            alt="Logo"
            className="h-12 object-contain animate-spin"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
