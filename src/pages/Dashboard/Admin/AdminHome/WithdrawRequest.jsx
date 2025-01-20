import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SharedTitle from "../../../../components/Shared/SharedTitle";
import { format } from "date-fns";
import toast from "react-hot-toast";
import useCoin from "../../../../hooks/useCoin";

const WithdrawRequest = () => {
    const [, , refetch] = useCoin()
  const axiosSecure = useAxiosSecure();
  const { data: withdraws, isLoading, refetch:withdrawRefetch } = useQuery({
    queryKey: ["withdraw-request"],
    queryFn: async () => {
      const { data } = await axiosSecure("/withdraw");
      return data;
    },
  });

  const handlePayment = async (withdraw) => {
    const approvalData = {
      worker: withdraw.worker?.workerEmail,
      coin: withdraw.withdrawCoin,
      status: "Approved",
    };
    try {
      const { data } = await axiosSecure.patch(`/withdraw/${withdraw?._id}`, {
        approvalData,
      });
      const notificationData = {
        message: `you have successfully withdraw $${withdraw.amount} for ${withdraw.withdrawCoin} coin`,
        ToEmail: withdraw?.worker?.workerEmail,
        actionRoute: "/dashboard/worker-home",
        Time: new Date(),
      };
      if (data.modifiedCount) {
        refetch()
        withdrawRefetch()
        toast.success("Withdrawal Request is approved");
        // notification
        await axiosSecure.post(
          "/notifications",
          notificationData
        );
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <SharedTitle title={"Withdraw Request"}></SharedTitle>
      <div className="overflow-x-auto w-10/12 mx-auto border border-[#A35C7A] mb-10 lg:mb-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg text-center">
              <th>#</th>
              <th>Worker Details </th>
              <th>Payment System</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {withdraws?.map((withdraw, idx) => (
              <tr className="text-center" key={withdraw._id}>
                <th>{idx + 1}</th>
                <td>
                  <div>
                    <div className="font-bold">
                      {withdraw.worker.workerName}
                    </div>
                    <div className="text-sm opacity-50">
                      {withdraw.worker.workerEmail}{" "}
                    </div>
                  </div>
                </td>
                <td>{withdraw.paymentSystem}</td>
                <td>{withdraw.amount}</td>
                <td>
                  {format(new Date(withdraw.withdrawDate), "MMMM dd, yyyy")}
                </td>
                <td
                  className={
                    withdraw.status === "Pending"
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {withdraw.status}
                </td>
                <td>
                  <button
                    onClick={() => handlePayment(withdraw)}
                    className="btn text-white btn-success"
                  >
                    Payment Success
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

export default WithdrawRequest;
