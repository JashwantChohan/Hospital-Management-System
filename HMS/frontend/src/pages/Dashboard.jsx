import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
     
      <div className="w-64 bg-blue-600 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Clinic HMS</h2>
        <ul className="flex flex-col space-y-4">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/doctors">Doctor</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </div>

      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-700">Today’s Appointments</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-700">Total Patients</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-700">Doctor Availability</h3>
            <p className="text-2xl font-bold">Available</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-700">Revenue</h3>
            <p className="text-2xl font-bold">Rs. 25,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
