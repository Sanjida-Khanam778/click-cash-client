import React, { useState } from "react";
import SharedTitle from "../../../../components/Shared/SharedTitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SubmissionModal from "../../../../components/Modal/SubmissionModal";
import toast from "react-hot-toast";

const TaskReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
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

  const { data: submissions = [], refetch } = useQuery({
    queryKey: ["buyer-submissions"],
    queryFn: async () => {
      const response = await axiosSecure(
        `/allSubmissions/buyer/${user?.email}`
      );
      return response.data;
    },
  });
  const handleSubmission = async (submission) => {
    setSelectedTask(submission);
    setIsEditModalOpen(true);
  };

  const handleApproval = async (submission) => {
    const amount = parseInt(submission.amount);
    // console.log(submission.amount)

    try {
      const { data } = await axiosSecure.patch(
        `/submission/${submission?._id}`,
        {
          amount,
        }
      );
      if (data.modifiedCount) {
        refetch()
        // withdrawRefetch()
        toast.success("Task is approved");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  // console.log(submissions);
  return (
    <div>
      <SharedTitle
        title={"Task Review"}
        subtitle={"look at the stats"}
      ></SharedTitle>

      <div className="overflow-x-auto w-10/12 mx-auto border border-[#A35C7A] mb-10 lg:mb-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg text-center">
              <th>#</th>
              <th>worker_name </th>
              <th>task_title</th>
              <th>payable_amount</th>
              <th>View Submission</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, idx) => (
              <tr key={submission?._id} className="text-center">
                <td>{idx + 1}</td>
                <th>{submission.worker.workerName}</th>
                <td>{submission.title}</td>
                <td>$ {submission.amount}</td>
                <td>
                  <button
                    onClick={() => handleSubmission(submission)}
                    className="btn btn-outline"
                  >
                    View Submission
                  </button>
                  <SubmissionModal
                    submission={selectedTask}
                    isOpen={isEditModalOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                  ></SubmissionModal>
                </td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleApproval(submission)}
                    className="btn"
                  >
                    Approve
                  </button>

                  <button className="btn">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskReview;
