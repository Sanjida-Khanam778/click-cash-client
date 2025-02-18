import React from "react";
import SharedTitle from "../../../../components/Shared/SharedTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { MdPendingActions } from "react-icons/md";
import { TbCoinFilled } from "react-icons/tb";

const WorkerStates = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: states = {} } = useQuery({
    queryKey: ["worker-stat"],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const { data } = await axiosSecure(`/worker-stats/${user?.email}`);
      return data;
    },
  });
  
  const { totalSubmissionCount, totalPendingSubmissionCount, totalEarning } =
    states;
  return (
    <div className="flex flex-col justify-center items-center w-10/12 mx-auto my-10 lg:my-32 px-4">
      <SharedTitle title={"Worker States"}></SharedTitle>
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full max-w-4xl">
        {/* Downloads Stat */}
        <div className="stat">
          <div className="stat-figure text-green-500">
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
          <div className="stat-title">Total Submission</div>
          <div className="stat-value">{totalSubmissionCount}</div>
        </div>

        {/* New Users Stat */}
        <div className="stat">
          <div className="stat-figure text-3xl text-red-500">
            <MdPendingActions></MdPendingActions>
          </div>
          <div className="stat-title">Total Pending Submission</div>
          <div className="stat-value">{totalPendingSubmissionCount}</div>
        </div>

        {/* New Registers Stat */}
        <div className="stat">
          <div className="stat-figure text-secondary text-3xl">
            <TbCoinFilled></TbCoinFilled>
          </div>
          <div className="stat-title">Total Earning</div>
          <div className="stat-value">{totalEarning}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkerStates;
