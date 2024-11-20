import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 h-[15vh] w-full overflow-hidden flex items-center justify-between px-4 py-6">
      <div className="logo-container h-full w-auto">
        <Link to="/">
          <img
            src={assets.flower_green}
            alt="Logo"
            className="h-full object-contain"
          />
        </Link>
      </div>
      {/* <div className="nav-link-wrapper">
        <Link to="/contact" className="nav-link text-lg font-medium">
          Contact
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
