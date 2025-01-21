import React from 'react';
import AdminStates from './AdminHome/AdminStates';
import WithdrawRequest from './AdminHome/WithdrawRequest';

const AdminHome = () => {
    return (
        <div>
            <AdminStates></AdminStates>
            <WithdrawRequest></WithdrawRequest>
        </div>
    );
};

export default AdminHome;