import logo from "../assets/logo.png";
import {
  FaAd,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { TbCoinFilled } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { IoNotificationsSharp } from "react-icons/io5";
import Footer from "../components/Shared/Footer";

const DashboardLayout = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <nav className=" bg-[#FBF5E5] ">
        <div className="w-10/12 mx-auto py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-5 md:h-9 mr-2 md:mr-4" src={logo} alt="" />
            <Link
              to={"/"}
              className="font-bold font-logoFont text-xl md:text-2xl xl:text-4xl text-logoFont"
            >
              <p className="tracking-widest">
                Click<span className="text-[#A35C7A]"> Cash</span>
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            <div className="flex flex-col items-end">
              <div className="flex p-2">
                <button className="flex items-center px-4 bg-transparent border-r-2 border-black font-bold">
                  <TbCoinFilled className="text-3xl text-[#f1e027] mr-1" />
                  400
                </button>
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  className="h-8 w-8 ml-3 rounded-full"
                />
              </div>
              <div className="flex p-2">
                <p className="mr-3 font-medium">role</p>
                <p className="border-l-2 pl-3 font-medium border-black">
                  {" "}
                  {user?.displayName}
                </p>
              </div>
            </div>
            <div className="">
              <IoNotificationsSharp className="text-2xl md:text-4xl" />
            </div>
          </div>
        </div>
      </nav>
      <div className="flex">
        <div className="min-h-screen w-64 text-white bg-[#C890A7] p-5">
          <ul className="menu">
            <li>
              <NavLink to={"/dashboard/workerHome"}>
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/taskList"}>
                <FaUtensils></FaUtensils>
                TaskList
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/mySubmissions"}>
                <FaList></FaList>
                My Submissions
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/withdrawals"}>
                <FaAd></FaAd>
                Withdrawals
              </NavLink>
            </li>

            <li>
              <NavLink to={"/dashboard/buyerHome"}>
                <FaUsers></FaUsers>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to={"/dashboard/addTask"}>
                <FaHome></FaHome>
                Add new Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/myTask"}>
                <FaCalendar></FaCalendar>
                My Task’s
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/purchaseCoin"}>
                <FaShoppingCart></FaShoppingCart>
                Purchase Coin
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/paymentHistory"}>
                <FaShoppingCart></FaShoppingCart>
                Payment history
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/adminHome"}>
                <FaAd></FaAd>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/manageUsers"}>
                <FaList></FaList>
                Manage Users
              </NavLink>
            </li>

            <li>
              <NavLink to={"/dashboard/manageTask"}>
                <FaHome></FaHome>
                Manage Task
              </NavLink>
            </li>
          
          </ul>
        </div>
        <div className="flex flex-col justify-between min-h-screen">
          <div className="">
            <Outlet></Outlet>
          </div>
          <div className="">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
