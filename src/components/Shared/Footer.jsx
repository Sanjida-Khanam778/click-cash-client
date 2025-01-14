import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logoFooter from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className={`flex flex-col`}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row items-center h-full md:items-end text-center text-black">
          <div className="bg-[#f3e8ce] py-10 text-black h-full p-10 ">
           <div className="space-y-4 h-full flex flex-col md:w-9/12 mx-auto">
           <div className="flex justify-center">
              <img
                className="mt-10 md:mt-0 mb-2 w-16"
                src={logoFooter}
                alt=""
              />
            </div>
               <Link to={'/'} className="font-bold font-logoFont text-xl md:text-2xl xl:text-4xl text-logoFont">
            <p className="tracking-widest">Click<span className="text-[#A35C7A]"> Cash</span></p>
          </Link>
            <p
              className={`pt-4 font-bold text-opacity-60 w-10/12 md:w-full mx-auto text-center `}
            >
              Your ultimate destination for exploring, discovering, and
              celebrating the magic of movies.
            </p>
           </div>
          </div>
          <div className=" flex justify-center items-center bg-[#e9ddbf] py-10 h-full">
            <div className="p-10 flex flex-col md:w-9/12 mx-auto">
              <div className="flex justify-center md:justify-center gap-5 mb-5">
                <Link
                  to={"https://www.linkedin.com/in/sanjida-khanam-ice"}
                  className="text-4xl text-blue-700"
                >
                  <FaLinkedin></FaLinkedin>
                </Link>

                <Link
                  to={"https://www.facebook.com"}
                  className="text-4xl text-blue-600"
                >
                  <FaFacebook></FaFacebook>
                </Link>
              </div>

              <p className="text-2xl mb-4 text-start md:text-center text-black text-opacity-70  font-semibold">
                Contact Information
              </p>
              <p
                className={`text-start md:text-center text-black mb-4 md:mb-0 font-bold text-opacity-70 `}
              >
                Location: av. Washington 165, NY CA 54003 <br />
                Phone: +31 85 964 47 25 <br />
                Email: info@filmyscope.com <br />
              </p>
            </div>
          </div>
        </div>
        {/* <div className="bg-[#f0e1b7] w-full p-4 flex justify-center">
          <p className="text-cente font-bold">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
