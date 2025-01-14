import React from 'react';
import useRole from '../../../hooks/useRole';
import Loader from '../../Loader/Loader';
import { Navigate } from 'react-router-dom';

const MyHome = () => {
    const [role, isLoading] = useRole()
    console.log(role)
    if(isLoading){
        return <Loader></Loader>
    }
    if(role==='Worker'){
        return <Navigate to={'/dashboard/workerHome'}></Navigate>
    }
    if(role==='Buyer'){
        return <Navigate to={'/dashboard/buyerHome'}></Navigate>
    }
    return (
        <div>
            <Navigate to={'/dashboard/adminHome'}></Navigate>
        </div>
    );
};

export default MyHome;