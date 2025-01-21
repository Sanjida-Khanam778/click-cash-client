import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import DashboardLayout from "../layouts/DashboardLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyHome from "../pages/Dashboard/Common/MyHome";
import MySubmissions from "../pages/Dashboard/Worker/MySubmissions";
import TaskList from "../pages/Dashboard/Worker/TaskList";
import Withdrawals from "../pages/Dashboard/Worker/Withdrawals";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageTask from "../pages/Dashboard/Admin/ManageTask";
import PurchaseCoin from "../pages/Dashboard/Buyer/PurchaseCoin";
import MyTask from "../pages/Dashboard/Buyer/MyTask";
import AddTask from "../pages/Dashboard/Buyer/AddTask";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import PaymentHistory from "../pages/Dashboard/Buyer/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Payments/Payment";
import TaskDetails from "../pages/Dashboard/Worker/TaskDetails";
import AdminRoute from "./AdminRoute";
import WorkerHome from "../pages/Dashboard/Worker/WorkerHome/WorkerHome";
import WorkerRoute from "./WorkerRoute";
import BuyerRoute from "./BuyerRoute";
import BuyerHome from "../pages/Dashboard/Buyer/BuyerHome/BuyerHome"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <MyHome></MyHome>,
      },
      {
        path: "workerHome",
        element: <WorkerRoute><WorkerHome></WorkerHome></WorkerRoute>,
      },
      {
        path: "buyerHome",
        element: <BuyerRoute><BuyerHome></BuyerHome></BuyerRoute>,
      },
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      },
      {
        path: "mySubmissions",
        element: <WorkerRoute><MySubmissions></MySubmissions></WorkerRoute>,
      },
      {
        path: "taskList",
        element: <WorkerRoute><TaskList></TaskList></WorkerRoute>,
      },
      {
        path: "taskDetails/:id",
        element: <WorkerRoute><TaskDetails></TaskDetails></WorkerRoute>,
      },
      {
        path: "withdrawals",
        element: <WorkerRoute><Withdrawals></Withdrawals></WorkerRoute>,
      },
      {
        path: "addTask",
        element: <BuyerRoute><AddTask></AddTask></BuyerRoute>,
      },
      {
        path: "myTask",
        element: <BuyerRoute><MyTask></MyTask></BuyerRoute>,
      },
      {
        path: "purchaseCoin",
        element: <BuyerRoute><PurchaseCoin></PurchaseCoin></BuyerRoute>,
      },
      {
        path: "payment",
        element: <BuyerRoute><Payment></Payment></BuyerRoute>,
      },
      {
        path: "paymentHistory",
        element: <BuyerRoute><PaymentHistory></PaymentHistory></BuyerRoute>,
      },
      {
        path: "manageUsers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
      },
      {
        path: "manageTask",
        element: <AdminRoute><ManageTask></ManageTask></AdminRoute>,
      },
    ],
  },
]);
