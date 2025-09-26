import React, { useState, useEffect } from "react";
import axios from "axios";

const Reports = () => {
  const [reportsData, setReportsData] = useState({
    dailyPatients: 0,
    revenue: 0,
    doctorAvailability: "All Available",
  });

  useEffect(() => {
    // Fetch reports data from backend
    axios
      .get("http://localhost:5000/reports")
      .then((res) => setReportsData(res.data))
      .catch((err) => console.error("Error fetching reports:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Daily Patients */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-700 font-medium mb-2">Daily Patients</h3>
          <p className="text-3xl font-bold">{reportsData.dailyPatients}</p>
        </div>

        {/* Revenue */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-700 font-medium mb-2">Revenue Generated</h3>
          <p className="text-3xl font-bold">Rs. {reportsData.revenue}</p>
        </div>

        {/* Doctor Availability */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-700 font-medium mb-2">Doctor Availability</h3>
          <p className="text-3xl font-bold">{reportsData.doctorAvailability}</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
