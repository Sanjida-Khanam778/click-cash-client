import React from "react";
import SharedTitle from "../../../../components/Shared/SharedTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const ApprovedSubmission = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: submissions = [] } = useQuery({
    queryKey: ["approved-submission"],
    enabled:
    !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure(
        `/mySubmission/${user?.email}?approved=${true}`
      );
      return response.data;
    },
  });
  return (
    <div>
      <SharedTitle title={"Approved Submission"}></SharedTitle>
      <div className="overflow-x-auto w-10/12 mx-auto border border-[#A35C7A] mb-10 lg:mb-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg text-center">
              <th>#</th>
              <th>Task Title</th>
              <th>Payable Amount</th>
              <th>Buyer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, idx) => (
              <tr className="text-center" key={submission._id}>
                <th>{idx + 1}</th>
                <td>{submission.title}</td>
                <td>$ {submission.amount}</td>
                <td>{submission.buyer.buyerName}</td>
                <td className="text-green-500 font-medium">{submission.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedSubmission;
