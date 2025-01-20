import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaRegCalendarAlt, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const TaskList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center text-lg">Loading tasks...</p>;

  return (
    <div className="w-11/12 mx-auto p-6 my-10 lg:my-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Task List</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tasks.map((task) => (
         <div 
         key={task._id} 
         className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between"
       >
         {/* Task Title */}
         <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">{task.title}</h3>
       
         {/* Buyer */}
         <p className="text-gray-500 mb-3">Posted by: <span className="text-gray-700 font-medium">{task.buyer}</span></p>
       
         {/* Task Details */}
         <div className="flex flex-col space-y-2 text-gray-700 flex-grow">
           <p className="flex items-center gap-2">
             <FaRegCalendarAlt className="text-blue-500" />Completion Date: {task.date}
           </p>
           <p className="flex items-center gap-2">
             <FaMoneyBillWave className="text-green-500" />Payable Amount: ${task.amount}
           </p>
           <p className="flex items-center gap-2">
             <FaUsers className="text-purple-500" /> {task.workers} Workers Required
           </p>
         </div>
       
         {/* Button */}
         <Link to={`/dashboard/taskDetails/${task._id}`}>
           <button className="mt-4 flex items-center gap-2 bg-[#C890A7] text-white px-4 py-2 rounded-md hover:bg-[#A35C7A] transition duration-200">
             <AiOutlineEye className="text-lg" />
             View Details
           </button>
         </Link>
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default TaskList;
