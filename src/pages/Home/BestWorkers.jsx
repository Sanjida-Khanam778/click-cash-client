import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SharedTitle from "../../components/Shared/SharedTitle";
import { TbCoinFilled } from "react-icons/tb";

const BestWorkers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: workers = [] } = useQuery({
    queryKey: ["best-workers"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/users/best");
      return data;
    },
  });

  return (
    <div className="w-10/12 mx-auto my-10 lg:my-20">
      <SharedTitle title={"Top 6 Workers"}></SharedTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {workers.map((worker) => (
          <div  data-aos="fade-up" data-aos-once="false"
            className="relative flex items-center justify-center h-80 w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden"
            key={worker._id}
          >
            {/* Background Image */}
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={worker.image || "https://via.placeholder.com/300"}
              alt={worker.name}
            />
            {/* Foreground Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end items-center text-white p-4">
              <p className="text-lg font-semibold mb-2">{worker.name}</p>
              <p className="text-sm flex items-center gap-2">
                <TbCoinFilled className="text-yellow-500 text-2xl" />
                {worker.coin}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestWorkers;
