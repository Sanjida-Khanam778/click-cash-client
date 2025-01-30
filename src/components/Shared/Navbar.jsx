import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { TbCoinFilled } from "react-icons/tb";
import useCoin from "../../hooks/useCoin";
import { CgSpinnerAlt } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [coin, isLoading, refetch] = useCoin();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && user?.email && (
        <>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li className="ml-3 block md:hidden" onClick={() =>
                window.open(
                  "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Sanjida-Khanam778",
                  "_blank"
                )
              }>
            
              Join as Developer
           
          </li>
        </>
      )}
    </>
  );

  return (
    <div className={`w-11/12 xl:w-10/12 mx-auto py-3`}>
      <div className="navbar justify-between px-0">
        <div className="">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-0 pr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
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
                    <TbCoinFilled className="text-3xl text-[#f1e027] mr-1" />
                    {coin}
                  </button>
                )}
                <div className="relative group mr-3">
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="absolute z-10 w-32 -bottom-8 -right-10 transform -translate-x-1/2 bg-white text-black text-sm px-3 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
                    {user?.displayName}
                  </div>
                </div>
                <Link onClick={logOut}>
                  <button className="btn text-white bg-[#A35C7A] border-none">
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
                  <button className="btn text-black px-2 md:px-4 border-black bg-transparent">
                    Login
                  </button>
                </Link>
                <Link className="" to={"/signup"}>
                  <button className="btn rounded-md px-2 md:px-4 bg-[#A35C7A] text-white border-none">
                    Register
                  </button>
                </Link>
              </>
            )}
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Sanjida-Khanam778",
                  "_blank"
                )
              }
              className="btn btn-outline ml-3 hidden md:block"
            >
              Join as Developer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
