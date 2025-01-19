import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SharedTitle from "../../../components/Shared/SharedTitle";
import { format } from "date-fns";

const MySubmissions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const submissionsPerPage = 5; 

  const { data: submission = [], isLoading } = useQuery({
    queryKey: ["my-submission", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/mySubmission/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;

  const indexOfLastSubmission = currentPage * submissionsPerPage;
  const indexOfFirstSubmission = indexOfLastSubmission - submissionsPerPage;
  const currentSubmissions = submission.slice(
    indexOfFirstSubmission,
    indexOfLastSubmission
  );
  const totalPages = Math.ceil(submission.length / submissionsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="my-10 lg:my-20">
      <SharedTitle title={"My Submissions"} subtitle={""}></SharedTitle>
      <div className="overflow-x-auto w-10/12 mx-auto border-y border-[#A35C7A]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="md:text-lg text-center">
              <th>#</th>
              <th>Job</th>
              <th>Buyer</th>
              <th>Submission Details</th>
              <th>Payable Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentSubmissions.map((item, idx) => (
              <tr key={idx}>
                <th className="text-center">
                  {indexOfFirstSubmission + idx + 1}
                </th>
                <td className="text-center">{item.title}</td>
                <td className="text-center">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{item.buyer.buyerName}</div>
                      <div className="text-sm opacity-50">
                        {item.buyer.buyerEmail}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  {item.submissionDetails.substring(0, 12)}... <br />
                  <span className="badge badge-ghost badge-sm">
                    {format(new Date(item.submitDate), "MMMM dd, yyyy")}
                  </span>
                </td>
                <td className="text-center">$ {item.amount}</td>
                <td
                  className={`${item.status === "Rejected" && "text-red-500"} ${
                    item.status === "Pending" && "text-yellow-500"
                  } ${
                    item.status === "Approved" && "text-green-500"
                  } font-medium text-center`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6">
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageChange(pageIndex + 1)}
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage === pageIndex + 1
                ? "bg-[#A35C7A] text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-[#C890A7] hover:text-white`}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MySubmissions;
