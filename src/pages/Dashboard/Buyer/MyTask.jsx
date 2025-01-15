import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDelete, MdOutlineBrowserUpdated } from "react-icons/md";
import SharedTitle from "../../../components/Shared/SharedTitle";

const MyTask = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: tasks = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/users/${user?.email}`);
      return res.data;
    },
  });
  console.log(tasks);

  return (
    <div className="my-10 md:my-16 lg:my-20">
      <SharedTitle title={"My task"} subtitle={"all the task"}></SharedTitle>
      <div className="overflow-x-auto w-10/12 mx-auto border border-[#A35C7A]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Task Title</th>
              <th>Task Details</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>{task.title}</td>
                <td>{task.details.substring(0, 15)}...</td>
                <td>{task.date}</td>
                <td className="text-3xl space-x-5">
                  <button>
                    <MdOutlineBrowserUpdated />
                  </button>
                  <button>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTask;
