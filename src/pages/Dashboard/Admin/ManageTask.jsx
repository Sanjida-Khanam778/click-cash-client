import React, { useState } from "react";
import SharedTitle from "../../../components/Shared/SharedTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import DeleteModal from "../../../components/Modal/DeleteModal";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const ManageTask = () => {
    
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const { data: tasks = [], isLoading, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
  });

  console.log(tasks);

  const handleDelete = async () => {
    if (selectedTask._id) {
      const refillAmount = selectedTask.workers * selectedTask.amount;
      console.log(refillAmount);
      try {
        await axiosSecure.delete(
          `/tasks/${selectedTask._id}?refillAmount=${refillAmount}`, {refillAmount}
        );
        refetch();
        setIsOpen(false);
        toast.success(`Successfully Deleted task: ${selectedTask.title}`);
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  if (isLoading) return <p className="text-center text-lg">Loading tasks...</p>;
  return (
    <div className="my-10 md:my-16 lg:my-20">
      <SharedTitle title={"Manage all Tasks"} subtitle={"all the task"}></SharedTitle>
      <div className="overflow-x-auto w-10/12 mx-auto border border-[#A35C7A]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg text-center">
              <th>#</th>
              <th>Task Title</th>
              <th>Task Details</th>
              <th>Buyer</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr key={task._id} className="text-center">
                <th>{idx + 1}</th>
                <td>{task.title}</td>
                <td>{task.details.substring(0, 15)}...</td>
                <td>{task.buyer}</td>
                <td>{task.date}</td>
                <td className="text-3xl flex">
                  <button
                    onClick={() => {
                      setSelectedTask(task);
                      setIsOpen(true);
                    }}
                  >
                    <MdDelete />
                  </button>
                  <DeleteModal
                    handleDelete={handleDelete}
                    isOpen={isOpen}
                    closeModal={closeModal}
                  ></DeleteModal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTask;
