import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { format } from "date-fns";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl my-5 text-center">Total Payments: {payments.length}</h2>
      <div className="overflow-x-auto w-9/12 mx-auto border border-[#A35C7A]">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Amount</th>
              <th>Transaction Id</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <tr key={payment._id}>
                <th>{idx + 1}</th>
                <td>{payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{format(new Date(payment.date), "MMMM dd, yyyy hh:mm:ss a")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
