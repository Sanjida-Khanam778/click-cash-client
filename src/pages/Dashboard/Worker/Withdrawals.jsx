import { useState } from "react";
import SharedTitle from "../../../components/Shared/SharedTitle";
import useCoin from "../../../hooks/useCoin";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaCoins, FaMobileAlt, FaMoneyBillWave } from "react-icons/fa";
const Withdrawals = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [coin, isLoading, refetch] = useCoin();
  const [amount, setAmount] = useState();
  const [coinChange, setCoinChange] = useState();

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  const withdrawalAmount = coin / 20;
  console.log(withdrawalAmount);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const withdrawCoin = form.withdrawCoin.value;
    if (!withdrawCoin) {
      setCoinChange(0);
      setAmount(0);
      return;
    }

    const paymentSystem = form.payMethod.value;

    const withdrawData = {
      withdrawCoin: parseInt(withdrawCoin),
      withdrawDate: new Date(),
      paymentSystem,
      worker: {
        workerEmail: user?.email,
        workerName: user?.displayName,
      },
      amount,
      status: "Pending",
    };
    console.log(withdrawData);

    const { data } = await axiosSecure.post("/withdraw", withdrawData);

    if (data.insertedId) {
      toast.success("withdrawal Successful");
    }
  };
  const handleCoinChange = (e) => {
    let withdrawCoin = e.target.value;

    if (withdrawCoin < 0) {
      toast.error("Invalid coin amount!");
      return;
    }

    if (withdrawCoin > coin) {
      toast.error("Insufficient Coin");
      withdrawCoin = coin;
    }

    setCoinChange(withdrawCoin);
    setAmount(withdrawCoin / 20);
  };
  return (
    <div className="max-w-2xl mx-auto my-10 lg:my-20 bg-white p-8 shadow-lg rounded-lg">
      <SharedTitle title={"Total Earning"}></SharedTitle>
      <div className="flex flex-col mb-5 text-center">
        <p className="text-lg font-semibold text-gray-700">
          <FaCoins className="inline-block text-yellow-500" /> Current Coins:{" "}
          <span className="text-blue-500">{coin}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <FaMoneyBillWave className="inline-block text-green-500" /> Equivalent
          Amount:{" "}
          <span className="text-green-600">${withdrawalAmount.toFixed(2)}</span>
        </p>
      </div>
      <SharedTitle title={"Withdrawal Form"}></SharedTitle>
      <div className="mt-5">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Coin Input */}
          <div className="relative">
            <label className="block text-gray-600 font-medium">
              Coin To Withdraw
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter coin amount"
              name="withdrawCoin"
              onChange={handleCoinChange}
              value={coinChange}
            />
            <FaCoins className="absolute top-10 right-4 text-gray-400" />
          </div>

          {/* Withdrawal Amount Display */}
          <div className="relative">
            <label className="block text-gray-600 font-medium">
              Withdraw Amount ($)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 focus:outline-none"
              placeholder="$0.00"
              name="withdrawAmount"
              value={amount}
              readOnly
            />
            <FaMoneyBillWave className="absolute top-10 right-4 text-gray-400" />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-gray-600 font-medium">
              Select Payment Method
            </label>
            <select
              name="payMethod"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option disabled selected>
                Choose Payment Method
              </option>
              <option>Bkash</option>
              <option>Rocket</option>
              <option>Nagad</option>
              <option>Upay</option>
            </select>
          </div>

          {/* Account Number */}
          <div className="relative">
            <label className="block text-gray-600 font-medium">
              Mobile Account Number
            </label>
            <input
              name="accNumber"
              type="number"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="01XXXXXXXXX"
            />
            <FaMobileAlt className="absolute top-10 right-4 text-gray-400" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white font-semibold rounded-lg transition-all ${
              amount < 10 && amount > 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#A35C7A] hover:bg-[#A35C7A]"
            }`}
            disabled={amount < 10 && amount > 0}
          >
            {amount < 10 && amount > 0 ? "Insufficient Coin" : "Withdraw"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdrawals;
