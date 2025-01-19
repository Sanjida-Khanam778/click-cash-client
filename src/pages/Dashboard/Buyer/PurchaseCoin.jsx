import React from "react";
import { useNavigate } from "react-router-dom";
import SharedTitle from "../../../components/Shared/SharedTitle";

const coinData = [
  { coins: 10, price: 1 },
  { coins: 150, price: 10 },
  { coins: 500, price: 20 },
  { coins: 1000, price: 35 },
];

const CoinCards = () => {
  const navigate = useNavigate();

  const handlePayment = (price) => {
    navigate(`/dashboard/payment?amount=${price}`);
  };

  return (
    <div className="my-10 lg:my-20">
      <SharedTitle title={"Purchase Coin"}></SharedTitle>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {coinData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:shadow-xl transition"
            onClick={() => handlePayment(item.price)}
          >
            <h2 className="text-2xl font-bold text-gray-700">
              {item.coins} Coins
            </h2>
            <p className="text-lg text-gray-500 my-2">=</p>
            <h3 className="text-xl font-semibold text-green-600">
              ${item.price}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinCards;
