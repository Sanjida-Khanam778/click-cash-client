import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MySubmissions = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: submission, isLoading} = useQuery({
        queryKey: ['my-submission', user?.email],
        queryFn: async()=>{
            const {data} = await axiosSecure(`/mySubmission/${user?.email}`)
            return data
        }
    })
    console.log(submission)
    if(isLoading) return <p className="text-center text-lg">Loading...</p>
    return (
        <div>
            My Submissions
        </div>
    );
};

export default MySubmissions;