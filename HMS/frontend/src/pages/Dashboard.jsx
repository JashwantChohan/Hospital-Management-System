import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen gap-2.5 rounded-[4px]">
      <div className="w-[25%] bg-[#d3d3d3] text-white p-6 rounded-[4px]">
        <h2 className="text-xl text-[#3b3b3b] font-bold mb-6">Clinic HMS</h2>
        <ul className="flex flex-col space-y-2">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#8e8c8c] text-[#fff] rounded px-3 py-2 block"
                  : "text-white hover:bg-[#8e8c8c]rounded px-3 py-2 block"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointments"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#8e8c8c] text-white rounded px-3 py-2 block"
                  : "text-white hover:bg-[#8e8c8c] rounded px-3 py-2 block"
              }
            >
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/patients"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#8e8c8c] text-white rounded px-3 py-2 block"
                  : "text-white hover:bg-[#8e8c8c] rounded px-3 py-2 block"
              }
            >
              Patients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#8e8c8c] text-white rounded px-3 py-2 block"
                  : "text-white hover:bg-[#8e8c8c] rounded px-3 py-2 block"
              }
            >
              Doctor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#8e8c8c] text-white rounded px-3 py-2 block"
                  : "text-white hover:bg-[#8e8c8c] rounded px-3 py-2 block"
              }
            >
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="text-white hover:bg-[#8e8c8c] rounded px-3 py-2 block"
            >
              Logout
            </NavLink>
          </li>
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
