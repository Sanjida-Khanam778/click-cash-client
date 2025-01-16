import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateForm = ({ task, setIsEditModalOpen, refetch }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: task.title,
      details: task.details,
      submissionInfo: task.submissionInfo,
    },
  });
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // const taskImg = await imageUpload(data.taskImg[0]);
    const taskData = {
      title: data.title,
      details: data.details,
      // workers: data.workers,
      // amount: data.amount,
      // date: data.date,
      submissionInfo: data.submissionInfo,
      // buyer: user?.email,
    };
    try {
      const response = await axiosSecure.patch(`/tasks/${task._id}`, taskData);
      if (response.data.modifiedCount > 0) {
        toast.success("Task updated successfully!");
        refetch();
        setIsEditModalOpen(false);
      } else {
        toast.error("No changes made.");
        setIsEditModalOpen(false);

      }
    } catch (error) {
      toast.error("Failed to update task.");
      setIsEditModalOpen(false);

    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Task Title</span>
              </label>
              <input
                {...register("title")}
                type="text"
                placeholder="Task Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Task Details</span>
              </label>
              <input
                {...register("details")}
                type="text"
                placeholder="Task Details"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="space-y-6 flex flex-col">
            {/*             
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Required Workers</span>
              </label>
              <input
                {...register("workers")}
                type="number"
                placeholder="Required Workers"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Payable amount</span>
              </label>
              <input
                {...register("amount")}
                type="number"
                placeholder="Payable amount"
                className="input input-bordered"
                required
              />
            </div> */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Submission Info</span>
              </label>
              <input
                type="text"
                {...register("submissionInfo")}
                placeholder="Submission Info"
                className="input input-bordered"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#C890A7] hover:bg-[#A35C7A]"
            >
              Update Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
