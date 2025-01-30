import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import logoFooter from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className={`flex flex-col`}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row items-center h-full md:items-end text-center text-black">
          <div className="bg-[#f3e8ce] py-5 lg:py-10 text-black h-full p-5 lg:p-10 ">
            <div className="space-y-4 h-full flex flex-col lg:w-9/12 mx-auto">
              <div className="flex justify-center">
                <img
                  className="mt-10 md:mt-0 mb-2 w-16"
                  src={logoFooter}
                  alt=""
                />
              </div>
              <Link
                to={"/"}
                className="font-bold font-logoFont text-xl md:text-2xl xl:text-4xl text-logoFont"
              >
                <p className="tracking-widest">
                  Click<span className="text-[#A35C7A]"> Cash</span>
                </p>
              </Link>
              <p
                className={`pt-4 font-bold text-opacity-60 w-10/12 md:w-full mx-auto text-center `}
              >
                Turn your time into earnings with ClickCash! Complete simple
                tasks and get paid instantly.
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center bg-[#e9ddbf] py-5 px-5 md:px-0 lg:py-10 h-full">
            <div className="p-1 lg:p-10 flex flex-col lg:w-9/12 mx-auto">
              <div className="flex justify-center md:justify-center gap-5 mb-5">
                <Link
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/sanjida-khanam-ice",
                      "_blank"
                    )
                  }
                  className="text-4xl text-blue-700"
                >
                  <FaLinkedin></FaLinkedin>
                </Link>

                <Link
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=100034140082279",
                      "_blank"
                    )
                  }
                  className="text-4xl text-blue-600"
                >
                  <FaFacebook></FaFacebook>
                </Link>
                <Link
                  onClick={() =>
                    window.open(
                      "https://github.com/Sanjida-Khanam778",
                      "_blank"
                    )
                  }
                  className="text-4xl"
                >
                  <FaGithub />
                </Link>
              </div>

              <p className="text-xl lg:text-2xl mb-4 text-start md:text-center text-black text-opacity-70  font-semibold">
                Contact Information
              </p>
              <p
                className={`text-start md:text-center text-black mb-2 lg:mb-0 font-bold text-opacity-70 `}
              >
                Location: 123 Main Street, Dhaka, Bangladesh <br />
                Phone: +880 1684796286 <br />
                Email: clickcashbd@gmail.com <br />
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f0e1b7] w-full p-4 flex justify-center">
          <p className="text-cente font-bold">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
