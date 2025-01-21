import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../pages/Loader/Loader";
import useRole from "../hooks/useRole";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isLoading } = useRole();
  const location = useLocation();

  if (loading || isLoading) {
    return <Loader></Loader>;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
