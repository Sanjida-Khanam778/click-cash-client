import React from "react";
import SharedTitle from "../../../../components/Shared/SharedTitle";

const TaskReview = () => {
  return (
    <div>
                <SharedTitle title={'Buyer states'} subtitle={'look at the stats'}></SharedTitle>

      <div className="overflow-x-auto w-10/12 mx-auto border border-[#A35C7A] mb-10 lg:mb-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>worker_name </th>
              <th>task_title</th>
              <th>payable_amount</th>
              <th>View Submission</th>
              <th>Action</th>
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
              <td>
                <button className="btn btn-outline">View Submission</button>
              </td>
              <td className="flex gap-2">
                <button className="btn">Approve</button>

                <button className="btn">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskReview;
