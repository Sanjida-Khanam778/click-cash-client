import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { TbCoinFilled } from "react-icons/tb";
import useCoin from "../../hooks/useCoin";
import { CgSpinnerAlt } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [coin, isLoading, refetch] = useCoin();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      {user && user?.email && (
        <>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li className="ml-3 lg:ml-0 block " onClick={() =>
                window.open(
                  "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Sanjida-Khanam778",
                  "_blank"
                )
              }>
            
              <button>Join as Developer</button>
           
          </li>
        </>
      )}
    </>
  );

  return (
    <div className={`w-11/12 xl:w-10/12 mx-auto md:py-3`}>
      <div className="navbar justify-between px-0">
        <div className="">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-0 pr-2"
            >
             <HiMenu className="text-2xl"></HiMenu>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="h-8 md:h-9 mr-2 md:mr-4 " src={logo} alt="" />
          <Link
            to={"/"}
            className="font-bold font-logoFont text-xl md:text-2xl xl:text-4xl text-logoFont"
          >
            <p className="tracking-widest hidden md:block">
              Click<span className="text-[#A35C7A]"> Cash</span>
            </p>
          </Link>
        </div>
        <div>
          <div className=" lg:justify-end  hidden lg:flex">
            <ul className={`flex gap-5 px-1 font-bold`}>{links}</ul>
          </div>
          <div className="flex">
            {user && user?.email ? (
              <>
                {isLoading ? (
                  <CgSpinnerAlt className="animate-spin m-auto" />
                ) : (
                  <button className=" flex items-center px-4 bg-transparent font-bold">
                    <TbCoinFilled className="text-2xl text-[#f1e027] mr-1" />
                    {coin}
                  </button>
                )}
                <div className="relative group mr-3 flex md:flex-col items-center">
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    className="h-8 w-8 md:h-12 md:w-12 rounded-full"
                  />
                  <div className="absolute z-10 w-32 -bottom-8 -right-10 transform -translate-x-1/2 bg-white text-black text-sm px-3 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
                    {user?.displayName}
                  </div>
                </div>
                <Link onClick={logOut}>
                  <button className="btn text-white bg-[#A35C7A] rounded-md hover:bg-[#A35C7A] border-none">
                    <span className="hidden md:block">Logout</span>
                    <span className="md:hidden text-xl">
                      <BiLogOutCircle></BiLogOutCircle>
                    </span>
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link className="mx-3" to={"/login"}>
                  <button className=" btn py-1 text-black rounded-md px-2 md:px-4 border-black hover:bg-black hover:text-white bg-transparent">
                    Login
                  </button>
                </Link>
                <Link className="" to={"/signup"}>
                  <button className="btn rounded-md px-2 md:px-4 hover:bg-black text-white border-none">
                    Register
                  </button>
                </Link>
              </>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
