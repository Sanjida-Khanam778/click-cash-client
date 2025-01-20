import { format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";

const SubmissionForm = ({ setIsEditModalOpen, submission }) => {
//   const handleSubmit = () => {
//     setIsEditModalOpen(false);
//   };


  return (
    <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 p-6 shadow-md">
      <div className="text-center space-y-4">
        <p className="text-lg font-semibold">
          Task: <span className="font-normal">{submission?.title}</span>
        </p>
        <p className="text-gray-600">{submission?.submissionDetails}</p>
        <div className="flex items-center justify-center space-x-2">
          <FaCalendarAlt className="text-blue-500" />
          <p className="text-sm">
            <span className="font-medium text-gray-800">
              {format(new Date(submission?.submitDate), "MMMM dd, yyyy")}
            </span>
          </p>
        </div>
       
      </div>
     
    </div>
  );
};

export default SubmissionForm;
