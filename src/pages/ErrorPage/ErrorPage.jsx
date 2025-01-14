import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiErrorCircle } from "react-icons/bi";
import { TbError404 } from 'react-icons/tb';


const ErrorPage = () => {
  
    const navigate = useNavigate()
    const handleBack=()=>{
        navigate('/')
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="text-red-600 text-7xl flex items-center">
          <BiErrorCircle className="mr-2" /><TbError404></TbError404>
        </div>
        <p className="text-4xl my-3 text-gray-800 font-semibold">Page Not Found !!!</p>
        <button
          className="btn  mt-8 text-white px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-all"
          onClick={handleBack}
        >
          Back to HomePage
        </button>
      </div>
    );
};

export default ErrorPage;