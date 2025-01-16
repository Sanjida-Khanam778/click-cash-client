import React, { useState } from "react";
import SharedTitle from "../../../components/Shared/SharedTitle";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../utilities/utils";
import useCoin from "../../../hooks/useCoin";
import { toast } from "react-hot-toast";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { CgSpinnerAlt } from "react-icons/cg";

const AddTask = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false)
  const { user } = useAuth();
  const [coin, , refetch] = useCoin();
  const onSubmit = async (data) => {
    setLoading(true)
    console.log(data.taskImg[0]);
    const taskImg = await imageUpload(data.taskImg[0]);
    console.log(taskImg);
    const taskData = {
      title: data.title,
      details: data.details,
      workers: data.workers,
      amount: data.amount,
      date: data.date,
      submissionInfo: data.submissionInfo,
      taskImg: taskImg,
      buyer: user?.email,
      buyerName: user?.displayName,
      buyerImg: user?.photoURL
    };
    // Total payable amount  ( required_workers * payable_amount )
    const totalPayableAmount = data.workers * data.amount;
    console.log(totalPayableAmount);
    if (totalPayableAmount > coin) {
      toast.error("Not available Coin. Purchase Coin");
      return navigate("/dashboard/purchaseCoin");
    }

    const res = await axiosSecure.post("addTask", taskData);
    console.log(res.data);
    if (res.data.insertedId) {
      setLoading(false)
      toast.success("Successfully added task");
      axiosSecure
        .patch(`/users/${user.email}`, { coin: totalPayableAmount })
        .then((res) => {
          console.log(res.data);
          refetch();
        });
    }
  };

  return (
    <div className="my-10 md:my-16 lg:my-24">
      <ScrollRestoration />
      <SharedTitle title={"add task"} subtitle={"new new"}></SharedTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-[#FBF5E5] w-10/12 xl:w-1/2 mx-auto"
      >
        <div className="flex gap-2">
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
        <div className="flex gap-2">
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
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Completion Date</span>
            </label>
            <input
              type="date"
              {...register("date")}
              placeholder="Completion Date"
              className="input input-bordered"
              required
            />
          </div>
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
        </div>
        <div>
          <label htmlFor="image" className="block mb-2 text-sm">
            Select Image:
          </label>
          <input
            {...register("taskImg")}
            required
            type="file"
            id="image"
            className="file-input file-input-bordered w-full"
            accept="image/*"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-[#A35C7A] text-white outline-none hover:bg-[#A35C7A]">
            {loading ? (
              <CgSpinnerAlt className="animate-spin m-auto" />
            ) : (
              "Add Task"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
