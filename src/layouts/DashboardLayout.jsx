import React, { useState } from "react";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaTasks,
  FaUsers,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";

import { FaClover } from "react-icons/fa6";
import { TbCoinFilled } from "react-icons/tb";
import { Link, NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";
import useCoin from "../hooks/useCoin";
import useRole from "../hooks/useRole";
import Footer from "../components/Shared/Footer";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdAddCircle, MdPayment } from "react-icons/md";
import { BiMoon, BiSun } from "react-icons/bi";


const DashboardLayout = () => {
  
  const axiosSecure = useAxiosSecure();
  const [notifications, setNotifications] = useState([]);
  const { user, theme, handleToggle } = useAuth();
  const [coin] = useCoin();
  const [role] = useRole();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = (
    <>
      {role === "Worker" && (
        <>
          <li>
            <NavLink to={"/dashboard/workerHome"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to={"/dashboard/taskList"}>
              <FaList />
              TaskList
            </NavLink>
          </li> */}
          <li>
            <NavLink to={"/dashboard/mySubmissions"}>
              <IoBagAdd />
              My Submissions
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/withdrawals"}>
              <FaAd />
              Withdrawals
            </NavLink>
          </li>
        </>
      )}

      {role === "Buyer" && (
        <>
          <li>
            <NavLink to={"/dashboard/buyerHome"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addTask"}>
              <MdAddCircle />
              Add new Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/myTask"}>
              <FaCalendar />
              My Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/purchaseCoin"}>
              <FaShoppingCart />
              Purchase Coin
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/paymentHistory"}>
              <MdPayment />
              Payment History
            </NavLink>
          </li>
        </>
      )}
      {role === "Admin" && (
        <>
          <li>
            <NavLink to={"/dashboard/adminHome"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageUsers"}>
              <FaUsers />
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageTask"}>
              <FaTasks />
              Manage Task
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleNotification = async () => {
    const { data } = await axiosSecure(`/notifications/${user?.email}`);
    setNotifications(data);
  };

  return (
    <div className={`${theme==='dark'?'text-white':'text-black'}`}>
      <ScrollRestoration />
      <nav className="{` w-full fixed top-0 bg-[#FBF5E5] z-50 ${theme==='dark'?'bg-black':'bg-[#FBF5E5]'}`} ">
        <div className="w-10/12 mx-auto py-2 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="lg:hidden mr-3"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <HiMenuAlt3 className="text-2xl md:text-4xl" />
            </button>
            <Link to={"/"}>
              <img className="h-7 md:h-9 mr-2 md:mr-4" src={logo} alt="" />
            </Link>
            <Link
              to={"/"}
              className="font-bold font-logoFont text-xl md:text-2xl xl:text-4xl text-logoFont"
            >
              <p className="tracking-widest hidden md:block">
                Click<span className="text-[#A35C7A]"> Cash</span>
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex flex-col items-end">
              <div className="flex p-1">
                <button className="">

                  <NavLink to={"/dashboard/profile"}>Profile</NavLink>
                </button>
                

                <button className="flex items-center px-4 bg-transparent font-bold">
                  <TbCoinFilled className="text-xl md:text-3xl text-[#f1e027] mr-1" />
                  {coin}
                </button>
               
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  className="h-8 w-8 ml-3 rounded-full"
                  alt="User"
                />
              </div>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <div className="indicator" onClick={handleNotification}>
                  {/* <span className="indicator-item badge badge-outline h-5 w-3 md:w-0 md:h-7 text-xs border-2 font-bold mt-1">
                    {notifications.length}
                  </span> */}

                  <div className=" w-7">
                    <IoMdNotifications className="text-xl lg:text-4xl"></IoMdNotifications>
                  </div>
                </div>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content card card-compact z-[1] w-64 overflow-y-auto h-80 md:h-auto lg:w-96 p-2 shadow border"
              >
                <h3 className="card-title p-3">Notifications</h3>
                <div className="card-body">
                  {notifications.map((notification) => (
                    <div key={notification._id} className="flex gap-2">
                      <FaClover className=""></FaClover>
                      <p>{notification.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={(e) => setIsDrawerOpen(e.target.checked)}
        />

        <div className="drawer-content flex flex-col ">
          {/* Main Content */}
          <div className="flex flex-col justify-between min-h-screen pt-16">
            <div>
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>

        {/* Sidebar/Drawer */}
        <div className="drawer-side fixed h-screen lg:pt-16 lg:mt-0">
          <label
            htmlFor="dashboard-drawer"
            className="drawer-overlay"
            onClick={() => setIsDrawerOpen(false)}
          ></label>
          <ul className="menu p-4 pt-6 w-80 bg-[#e9ddbf] h-full ">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
