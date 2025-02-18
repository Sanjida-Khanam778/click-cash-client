import React, { useState } from "react";
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

  const [sortedTasks, setSortedTasks] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  const handleSort = (order) => {
    if (order === "asc") {
      setSortedTasks([...tasks].sort((a, b) => a.amount - b.amount));
    } else if (order === "desc") {
      setSortedTasks([...tasks].sort((a, b) => b.amount - a.amount));
    } else {
      setSortedTasks(tasks);
    }
    setSortOrder(order);
  };

  React.useEffect(() => {
    setSortedTasks(tasks);
  }, [tasks]);

  if (isLoading) return <p className="text-center text-lg">Loading tasks...</p>;

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Task List</h2>

      {/* Sorting Controls */}
      <div className="flex justify-center mb-4">
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="px-4 py-2 border rounded-md "
        >
          <option value="default">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Task Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedTasks.map((task) => (
          <div
            key={task._id}
            className="shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between h-[450px]"
          >
            <img src={task.taskImg} className="rounded-lg mb-5 object-cover h-[150px] w-full" alt="" />
            <h3 className="text-xl lg:text-2xl font-semibold  mb-2">{task.title}</h3>
            <p className=" mb-3">
              Posted by: <span className=" font-medium">{task.buyer}</span>
            </p>
            <div className="flex flex-col space-y-2  flex-grow">
              <p className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-blue-500" /> Completion Date: {task.date}
              </p>
              <p className="flex items-center gap-2">
                <FaMoneyBillWave className="text-green-500" /> Payable Amount: ${task.amount}
              </p>
              <p className="flex items-center gap-2">
                <FaUsers className="text-purple-500" /> {task.workers} Workers Required
              </p>
            </div>
            <Link to={`/taskDetails/${task._id}`}>
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
