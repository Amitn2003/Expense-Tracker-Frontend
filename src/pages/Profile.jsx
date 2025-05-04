import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (e) {
        console.error('Failed to parse user data:', e);
      }
    }
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading your profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-bold text-indigo-600 shadow-inner">
              {user.reg_user_name[0]}
            </div>
            <div>
              <h1 className="text-white text-2xl font-semibold">{user.reg_user_name}</h1>
              <p className="text-indigo-100">Expense Tracker Account</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <p className="text-white text-sm">Member ID: {user.user_id}</p>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <ProfileItem label="Email" value={user.gmail} />
          <ProfileItem label="Username" value={user.user_name} />
          <ProfileItem label="Phone Number" value={user.phone_number} />
          <ProfileItem label="Gender" value={user.gender} />
          <ProfileItem label="Age" value={user.age} />
          <ProfileItem label="Registration ID" value={user.reg_id} />
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t text-sm text-gray-500 text-center">
          Secure personal finance app • All rights reserved © 2025
        </div>
      </div>
    </div>
  );
};

const ProfileItem = ({ label, value }) => (
  <div className="bg-gray-100 p-4 rounded-md border border-gray-200">
    <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
    <p className="text-lg font-medium text-gray-800">{value}</p>
  </div>
);

export default Profile;
