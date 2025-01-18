import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SharedTitle from "../../../components/Shared/SharedTitle";
import {
  FaUser,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";
import { MdOutlineSubtitles, MdDescription } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const TaskDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = useAuth();

  const { data: task = {}, isLoading, refetch } = useQuery({
    queryKey: ["task-details", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/task/${id}`);
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;

  const {
    amount,
    buyer,
    buyerName,
    buyerImg,
    date,
    details,
    submissionInfo,
    taskImg,
    title,
    workers,
    _id
  } = task;
  const handleSubmit = async(e) => {
    e.preventDefault();
    const submissionDetails=e.target.subDetails.value
    const submissionData = {
      submitDate: new Date(),
      taskId: _id,
      worker:{
        workerEmail: user?.email,
        workerName: user?.displayName
      },
      amount,
      buyer:{
        buyerName,
        buyerEmail: buyer
      },
      completionDate:date,
      details,
      submissionInfo,
      taskImg,
      submissionDetails,
      title,
      workers: parseInt(workers),
      status: "Pending"
    };
    console.log(submissionData);
    const {data} = await axiosSecure.post('/submission', submissionData)
    
    
    if(data.insertedId){
      toast.success("Submission Successful")
      refetch()
    }
  };

  return (
    <div className="my-10 lg:my-20 w-10/12 lg:w-3/4 mx-auto">
      {/* Task Details */}
      <SharedTitle title={"Task Details"} subtitle={""}></SharedTitle>
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mb-4 lg:mb-10 ">
        <div className="relative">
          <img
            src={taskImg}
            alt={title}
            className="w-full object-cover rounded-lg mb-4"
          />
          <div className="bg-black text-white bg-opacity-80 rounded-lg absolute left-3 bottom-2 p-3">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              {title}
            </h2>
            <p className=" mt-2 text-3xl flex items-center gap-2 justify-center">
              <FaDollarSign className="text-green-500" />
              {amount}
            </p>
          </div>
        </div>
        <p className="text-gray-600 mt-2 flex items-center gap-2">
          <FaUser className="text-purple-500" /> Buyer: {buyer}
        </p>
        <p className="text-gray-600 mt-2 flex items-center gap-2">
          <FaCalendarAlt className="text-red-500" /> Completion Date: {date}
        </p>
        <p className="text-gray-600 mt-2 flex items-center gap-2">
          <FaUsers className="text-yellow-500" /> Vacancy Available: {workers}
        </p>
        <p className="text-gray-700 mt-4 flex items-start gap-2">
          <MdDescription className="text-gray-500 mt-1" /> {details}
        </p>
        <p className="text-gray-700 mt-4">Submission Info: {submissionInfo}</p>
      </div>

      {/* Submission Form */}
      <SharedTitle title={"Submission Form"} />
      <div className="mt-6 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex justify-between">
            <label htmlFor="password" className="mx-auto">
              Submission Details
            </label>
          </div>
          <textarea
            type="text"
            name="subDetails"
            className="textarea textarea-bordered w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Submission Details..."
          />
          <button className="bg-[#C890A7] font-medium text-white py-2 px-4 rounded-md hover:bg-[#A35C7A] transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskDetails;
