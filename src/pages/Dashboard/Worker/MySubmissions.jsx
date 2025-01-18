import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SharedTitle from "../../../components/Shared/SharedTitle";
import { format } from "date-fns";

const MySubmissions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: submission, isLoading } = useQuery({
    queryKey: ["my-submission", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/mySubmission/${user?.email}`);
      return data;
    },
  });
  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  console.log(submission)
  return (
    <div className="my-10 lg:my-20">
      
      <SharedTitle title={"My submissions"} subtitle={""}></SharedTitle>
      <div className="overflow-x-auto w-10/12 mx-auto border-y border-[#A35C7A]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="md:text-lg text-center">
              <th>#</th>
              <th>Job</th>
              <th>Buyer</th>
              <th>Submission Details</th>
              <th>Payable amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {submission.map((item, idx) => (
              <tr>
                <th className="text-center">{idx + 1}</th>
                <td className="text-center">{item.title}</td>
                <td className="text-center">
                  <div className="flex items-center gap-3">
                    {/* <div className="avatar">
                      <div className="mask mask-squircle h-8 w-8">
                        <img src={item.buyer.buyerImg} alt={item.buyer.buyerName} />
                      </div>
                    </div> */}
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
                  className={`${item.status === "Pending" && "text-red-500"} ${item.status === "Approved" && "text-green-500"} font-bold text-center`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySubmissions;
