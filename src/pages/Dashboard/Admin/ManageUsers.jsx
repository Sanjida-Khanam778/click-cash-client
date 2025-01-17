import React from "react";
import SharedTitle from "../../../components/Shared/SharedTitle";

const ManageUsers = () => {
  return (
    <div>
      <SharedTitle title={"Manage Users"}></SharedTitle>
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
                  className={`${
                    item.status === "Pending" && "text-red-500"
                  } font-bold text-center`}
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

export default ManageUsers;
