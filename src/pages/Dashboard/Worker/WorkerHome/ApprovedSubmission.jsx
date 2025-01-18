import React from "react";
import SharedTitle from "../../../../components/Shared/SharedTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const ApprovedSubmission = () => {
  const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: submissions=[]} = useQuery({
        queryKey:['approved-submission'],
        queryFn: async(req, res)=>{
            const response = await axiosSecure(`/mySubmission/${user?.email}?approved=${true}`)
            return response.data
        }
    })
    console.log(submissions)
  return (
    <div>
      <SharedTitle title={"Approved Submission"}></SharedTitle>
      <div className="overflow-x-auto w-10/12 mx-auto border border-[#A35C7A] mb-10 lg:mb-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Task Title</th>
              <th>Payable Amount</th>
              <th>Buyer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {tasks.map((task, idx) => (
              <tr key={task._id}>
                <th>{idx + 1}</th>
                <td>{task.title}</td>
                <td>{task.details.substring(0, 15)}...</td>
                <td>{task.submissionInfo.substring(0, 20)}...</td>
                <td>{task.date}</td>
                <td className="text-3xl space-x-5">
                  <button>
                    <MdOutlineBrowserUpdated />
                  </button>
                 
                  <button
                    onClick={() => {
                      setSelectedTask(task);
                      setIsOpen(true);
                    }}
                  >
                    <MdDelete />
                  </button>
                 
                </td>
              </tr>
            ))} */}
            <tr>
              <th>1</th>
              <td>name</td>
              <td>title</td>
              <td>amount</td>
              <td className="flex gap-2">Reject</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedSubmission;
