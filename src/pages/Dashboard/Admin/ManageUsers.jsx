import React, { useEffect, useState } from "react";
import SharedTitle from "../../../components/Shared/SharedTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async (req, res) => {
      const { data } = await axiosSecure("/allUsers");
      return data;
    },
  });

  const handleRole = async (e, user) => {
    const role = e.target.value;
    console.log(typeof role, user.email);
   
    try {
      const response = await axiosSecure.patch(
        `/users/role/${user?.email}`,
        {role}
      );

        if (response.data.modifiedCount > 0) {
          refetch();
          toast.success("User role updated successfully");
        }
    } catch (error) {
      toast.error("Failed to update user role");
    }
  };

  const handleDelete=async id=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            try {
                const response = await axiosSecure.delete(
                  `/users/${id}`
                );
          
                  if (response.data.deletedCount > 0) {
                    refetch();
                    // toast.success("User deleted successfully");
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                  }
              } catch (error) {
                toast.error("Failed to delete user.");
              }
        
        }
      });
   
  }

  return (
    <div className="my-10 lg:my-20">
      <SharedTitle title={"Manage Users"}></SharedTitle>
      <div className="overflow-x-auto w-10/12 mx-auto border-y border-[#A35C7A]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg text-center">
              <th>#</th>
              <th>User</th>
              <th>Role</th>
              <th>Coin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th className="text-center">{idx + 1}</th>
                <td className="text-center">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-8 w-8">
                        <img src={user.image} alt={user?.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="text-center">{user?.role}</td>
                <td className="text-center">{user?.coin}</td>
                <td className="flex gap-2">
                  <button onClick={()=>handleDelete(user?._id)} className="btn btn-xs">Remove</button>

                  <select
                    value={user?.role}
                    onChange={(e) => handleRole(e, user)}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled selected>
                        Update Role
                      </option>
                    <option value="Admin">Admin</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Worker">Worker</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
