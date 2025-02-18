import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import logoFooter from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f3e8ce]">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center px-4 lg:px-10 py-6 space-y-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img className="w-12 mb-2" src={logoFooter} alt="Click Cash Logo" />
          <Link
            to="/"
            className="font-bold font-logoFont text-xl md:text-2xl xl:text-3xl"
          >
            <p className="tracking-widest">
              Click<span className="text-[#A35C7A]"> Cash</span>
            </p>
          </Link>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-black text-opacity-70 max-w-md">
          Turn your time into earnings with ClickCash! Complete simple tasks
          and get paid instantly.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Link
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sanjida-khanam-ice",
                "_blank"
              )
            }
            className="text-2xl text-blue-700 hover:opacity-80"
          >
            <FaLinkedin />
          </Link>
          <Link
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100034140082279",
                "_blank"
              )
            }
            className="text-2xl text-blue-600 hover:opacity-80"
          >
            <FaFacebook />
          </Link>
          <Link
            onClick={() =>
              window.open("https://github.com/Sanjida-Khanam778", "_blank")
            }
            className="text-2xl hover:opacity-80"
          >
            <FaGithub />
          </Link>
        </div>

      
      </div>

      {/* Bottom Section */}
      <div className="border-t border-black/40 py-3">
        <p className="text-center font-bold text-xs md:text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
