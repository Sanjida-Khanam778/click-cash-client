import React from "react";
import SharedTitle from "../../../../components/Shared/SharedTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const BuyerStates = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: states = {} } = useQuery({
    queryKey: ["buyer-stat"],
    enabled:
    !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const { data } = await axiosSecure(`/buyer-stats/${user?.email}`);
      return data;
    },
  });
  const { totalTaskCount, pendingTaskCount, totalPayments } = states;
  return (
    <div className="flex flex-col justify-center items-center my-10 lg:my-20">
      <SharedTitle
        title={"Buyer States"}
        subtitle={"Look at the stats"}
      ></SharedTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full px-4 lg:px-20">
        <div className="stat shadow-lg rounded-lg bg-white p-6">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Task</div>
          <div className="stat-value">{totalTaskCount}</div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>

        <div className="stat shadow-lg rounded-lg bg-white p-6">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Pending Task</div>
          <div className="stat-value">{pendingTaskCount}</div>
          {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>

        <div className="stat shadow-lg rounded-lg bg-white p-6">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Payment</div>
          <div className="stat-value">{totalPayments}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
      </div>
    </div>
  );
};

export default BuyerStates;
