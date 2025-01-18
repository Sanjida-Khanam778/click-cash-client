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
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Payments/Payment";
import BuyerHome from "../pages/Dashboard/Buyer/BuyerHome/BuyerHome";
import TaskDetails from "../pages/Dashboard/Worker/TaskDetails";
import WorkerHome from "../pages/Dashboard/Worker/WorkerHome/WorkerHome";
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
        element: <WorkerHome></WorkerHome>,
      },
      {
        path: "buyerHome",
        element: <BuyerHome></BuyerHome>,
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "mySubmissions",
        element: <MySubmissions></MySubmissions>,
      },
      {
        path: "taskList",
        element: <TaskList></TaskList>,
      },
      {
        path: "taskDetails/:id",
        element: <TaskDetails></TaskDetails>,
      },
      {
        path: "withdrawals",
        element: <Withdrawals></Withdrawals>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "myTask",
        element: <MyTask></MyTask>,
      },
      {
        path: "purchaseCoin",
        element: <PurchaseCoin></PurchaseCoin>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageTask",
        element: <ManageTask></ManageTask>,
      },
    ],
  },
]);
