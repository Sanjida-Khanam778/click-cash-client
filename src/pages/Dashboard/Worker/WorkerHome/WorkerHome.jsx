import React from 'react';
import WorkerStates from './WorkerStates';
import ApprovedSubmission from './ApprovedSubmission';

const WorkerHome = () => {
    return (
        <div>
  
            <WorkerStates></WorkerStates>
            <ApprovedSubmission></ApprovedSubmission>
        </div>
    );
};

export default WorkerHome;