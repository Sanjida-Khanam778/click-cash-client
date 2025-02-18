import React from "react";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const {user} = useAuth()
    console.log(user)
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 border-b pb-4">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user.displayName}</h2>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>

        {/* Tabs or Sections */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Details
          </h3>
          {/* Profile Information */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                value={user?.displayName}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                value={user?.email}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                value="N/A"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
              Last SignIn Time
              </label>
              <input
                type="text"
                value={user?.metadata?.lastSignInTime}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
            </div>
          </div>
        </div>

        {/* Earnings and Statistics */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Earnings and Stats
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center shadow">
              <h4 className="text-gray-600">Total Earnings</h4>
              <p className="text-2xl font-bold text-blue-600">$1200</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center shadow">
              <h4 className="text-gray-600">Tasks Completed</h4>
              <p className="text-2xl font-bold text-green-600">45</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-between items-center">
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Update Profile
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;