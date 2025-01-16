import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDelete, MdOutlineBrowserUpdated } from "react-icons/md";
import SharedTitle from "../../../components/Shared/SharedTitle";
import UpdateModal from "../../../components/Modal/UpdateModal";
import DeleteModal from "../../../components/Modal/DeleteModal";
import toast from "react-hot-toast";
import useCoin from "../../../hooks/useCoin";

const MyTask = () => {
  const { user } = useAuth();
  const [, , refetch] = useCoin()
  // delete modal state
  let [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  // update modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const axiosSecure = useAxiosSecure();
  const { data: tasks = [], refetch: taskRefetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/tasks/${user?.email}`);
      return res.data;
    },
  });
  console.log(tasks);

  const handleUpdate = async (task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const handleDelete = async () => {
    if (selectedTask._id) {
      const refillAmount = selectedTask.workers * selectedTask.amount;
      console.log(refillAmount);
      try {
        await axiosSecure.delete(`/tasks/${selectedTask._id}?refillAmount=${refillAmount}`, {
          refillAmount,
        });
        refetch();
        taskRefetch()
        setIsOpen(false);
        toast.success(`Successfully Deleted task: ${selectedTask.title}`);
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

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
              <th>Submission Info</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr key={task._id}>
                <th>{idx + 1}</th>
                <td>{task.title}</td>
                <td>{task.details.substring(0, 15)}...</td>
                <td>{task.submissionInfo.substring(0, 20)}...</td>
                <td>{task.date}</td>
                <td className="text-3xl space-x-5">
                  <button onClick={() => handleUpdate(task)}>
                    <MdOutlineBrowserUpdated />
                  </button>
                  <UpdateModal
                    refetch={refetch}
                    task={selectedTask}
                    isOpen={isEditModalOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                  ></UpdateModal>
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

export default MyTask;
