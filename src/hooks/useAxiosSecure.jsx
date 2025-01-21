import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        const status = error?.response?.status;
        if (status === 400 || status === 401 || status === 403) {
          logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  },[logOut])
 
  return axiosSecure;
};
export default useAxiosSecure;
