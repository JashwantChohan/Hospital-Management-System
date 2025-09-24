import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorCard from "../components/DoctorCard";

const Doctors = () => {
  const [doctors, setDoctors] = useState({
    mainDoctor: { name: "", speciality: "", address: "", fees: "" },
    assistantDoctor: { name: "", speciality: "", address: "", fees: "" },
  });

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctors")
      .then((response) => {
        if (response.data) {
          setDoctors(response.data);
        }
      })
      .catch((error) => console.error("Error fetching doctors", error));
  }, []);

  const handleUpdateDoctor = (role, e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/doctors/update/${role}`, doctors[role])
      .then((response) => {
        console.log("Updated doctor:", response.data);
        setIsEditMode(false);
      })
      .catch((error) => console.error("Error updating doctor", error));
  };

  const handleChange = (role, field, value) => {
    setDoctors({
      ...doctors,
      [role]: { ...doctors[role], [field]: value },
    });
  };

  return (
    <div className="main-doc-container flex flex-col items-center">
      <h2 className="text-2xl mb-4">Clinic Doctors</h2>

      {/* Main Doctor */}
      <DoctorCard
        title="Main Doctor"
        doctor={doctors.mainDoctor}
        isEditMode={isEditMode}
        onChange={(field, value) => handleChange("mainDoctor", field, value)}
        onSave={(e) => handleUpdateDoctor("mainDoctor", e)}
      />

      {/* Assistant Doctor */}
      <DoctorCard
        title="Assistant Doctor"
        doctor={doctors.assistantDoctor}
        isEditMode={isEditMode}
        onChange={(field, value) => handleChange("assistantDoctor", field, value)}
        onSave={(e) => handleUpdateDoctor("assistantDoctor", e)}
      />

      <button
        className="mt-4 p-2 bg-[#007bff] text-[#fff] rounded hover:bg-[#0056b3]"
        onClick={() => setIsEditMode(!isEditMode)}
      >
        {isEditMode ? "Cancel Edit" : "Edit Doctors"}
      </button>
    </div>
  );
};

export default Doctors;
