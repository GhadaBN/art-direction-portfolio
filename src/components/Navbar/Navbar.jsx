import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 h-[15vh] w-full overflow-hidden flex items-center justify-between px-4 py-6 mb-4">
      <div className="logo-container h-full w-auto">
        <Link to="/">
          <img
            src={assets.flower_green}
            alt="Logo"
            className="h-full object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
