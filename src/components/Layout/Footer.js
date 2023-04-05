import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gray-400 text-white">
      <h1 className="text-center">All Right Reserved &copy; Shaharuque</h1>
      <p className=" mt-3  flex justify-center ">
        <Link className="ml-2 mr-2" to="/about">
          About
        </Link>
        |
        <Link className="ml-2 mr-2" to="/contact">
          Contact
        </Link>
        |
        <Link className="ml-2 mr-2" to="/policy">
          Privacy-Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
