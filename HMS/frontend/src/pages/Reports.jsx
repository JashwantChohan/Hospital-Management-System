import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const Reports = () => {
  const [reportsData, setReportsData] = useState({
    dailyPatients: 0,
    revenue: 0,
    doctorAvailability: "All Available",
  });

  const [patientsTrend, setPatientsTrend] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [doctorAvailability, setDoctorAvailability] = useState([]);

  useEffect(() => {
    setReportsData({
      dailyPatients: 32,
      revenue: 120000,
      doctorAvailability: "2 Doctors on Leave",
    });

    setPatientsTrend([
      { day: "Mon", patients: 20 },
      { day: "Tue", patients: 25 },
      { day: "Wed", patients: 32 },
      { day: "Thu", patients: 28 },
      { day: "Fri", patients: 35 },
      { day: "Sat", patients: 40 },
      { day: "Sun", patients: 22 },
    ]);

    setRevenueData([
      { day: "Mon", revenue: 20000 },
      { day: "Tue", revenue: 30000 },
      { day: "Wed", revenue: 25000 },
      { day: "Thu", revenue: 40000 },
      { day: "Fri", revenue: 35000 },
      { day: "Sat", revenue: 50000 },
      { day: "Sun", revenue: 18000 },
    ]);

    setDoctorAvailability([
      { name: "Available", value: 8 },
      { name: "On Leave", value: 2 },
    ]);
  }, []);

  const COLORS = ["#4CAF50", "#FF5722"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-700 font-medium mb-2">Daily Patients</h3>
          <p className="text-3xl font-bold">{reportsData.dailyPatients}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-700 font-medium mb-2">Revenue Generated</h3>
          <p className="text-3xl font-bold">Rs. {reportsData.revenue}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-700 font-medium mb-2">Doctor Availability</h3>
          <p className="text-3xl font-bold">{reportsData.doctorAvailability}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-center font-medium mb-4">Patients Trend</h3>
          <LineChart width={300} height={200} data={patientsTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="patients" stroke="#007BFF" strokeWidth={2} />
          </LineChart>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-center font-medium mb-4">Revenue per Day</h3>
          <BarChart width={300} height={200} data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#28a745" />
          </BarChart>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-center font-medium mb-4">Doctor Availability</h3>
          <PieChart width={300} height={200}>
            <Pie
              data={doctorAvailability}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
              label
            >
              {doctorAvailability.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Reports;
