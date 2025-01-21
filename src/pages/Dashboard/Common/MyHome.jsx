import React from 'react';
import Loader from '../../Loader/Loader';
import { Navigate } from 'react-router-dom';
import useRole from '../../../hooks/useRole';
import useAuth from '../../../hooks/useAuth';

const MyHome = () => {
    const [role, isLoading] = useRole()
    const{loading} = useAuth()
    if(isLoading){
        return <Loader></Loader>
    }
    if(loading){
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