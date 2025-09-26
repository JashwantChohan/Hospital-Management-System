import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorCard from "../components/DoctorCard";

const Doctors = () => {
  const [doctors, setDoctors] = useState({
    mainDoctor: { name: "Dr Chuni Lal", speciality: "Psychaitrist", address: "Dr Plaza", fees: "2000" },
    assistantDoctor: { name: "Dr Ahmed (Assistant)", speciality: "Psychaitrist", address: "Dr Plaza", fees: "2000" },
    activeDoctor: "mainDoctor",
  });

  const [isEditMode, setIsEditMode] = useState(false);

  // Dummy Data



  // ////////////////// This is for backend//////////////////////////
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/doctors")
  //     .then((response) => {
  //       if (response.data) {
  //         setDoctors(response.data);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching doctors", error));
  // }, []);

  const handleUpdateDoctor = (role, e) => {
    e.preventDefault();

    alert(`${role} updated successfully (dummy only, no backend yet)!`);
    setIsEditMode(false);

    // axios
    //   .post(`http://localhost:5000/doctors/update/${role}`, doctors[role])
    //   .then((response) => {
    //     console.log("Updated doctor:", response.data);
    //     setIsEditMode(false);
    //   })
    //   .catch((error) => console.error("Error updating doctor", error));
  };

  const handleChange = (role, field, value) => {
    setDoctors((prev) => ({
      ...prev,
      [role]: { ...prev[role], [field]: value },
    }));
  };

  const handleAssignAssistant = () => {
    setDoctors((prev) => ({ ...prev, activeDoctor: "assistantDoctor" }));
    alert("Assistant Doctor assigned successfully! (dummy)");

    // axios
    //   .post("http://localhost:5000/doctors/assign", { activeDoctor: "assistantDoctor" })
    //   .then(() => {
    //     setDoctors((prev) => ({ ...prev, activeDoctor: "assistantDoctor" }));
    //     alert("Assistant Doctor assigned successfully!");
    //   })
    //   .catch((err) => console.error(err));
  };


  const handleReassignMainDoctor = () => {
    setDoctors((prev) => ({ ...prev, activeDoctor: "mainDoctor" }));
    alert("Reassigned to Main Doctor! (dummy)");


    // axios
    //   .post("http://localhost:5000/doctors/assign", { activeDoctor: "mainDoctor" })
    //   .then(() => {
    //     setDoctors((prev) => ({ ...prev, activeDoctor: "mainDoctor" }));
    //     alert("Reassigned to Main Doctor!");
    //   })
    //   .catch((err) => console.error(err));
  };

  return (
    <div className="main-doc-container flex flex-col items-center">
      <h2 className="text-2xl mb-4">Clinic Doctors</h2>

      <p className="m-4 border-[2px] px-4 py-2 rounded-[4px] text-gray-600">
        Currently Active:{" "}
        <span className="font-bold text-green-600">{doctors.activeDoctor}</span>
      </p>

      <div className="flex flex-row gap-2.5 m-2.5">
        <DoctorCard
          title="Main Doctor"
          doctor={doctors.mainDoctor}
          isEditMode={isEditMode}
          onChange={(field, value) => handleChange("mainDoctor", field, value)}
          onSave={(e) => handleUpdateDoctor("mainDoctor", e)}
          onAssignAssistant={handleAssignAssistant}
        />

        <DoctorCard
          title="Assistant Doctor"
          doctor={doctors.assistantDoctor}
          isEditMode={isEditMode}
          onChange={(field, value) => handleChange("assistantDoctor", field, value)}
          onSave={(e) => handleUpdateDoctor("assistantDoctor", e)}
          onReassignMainDoctor={handleReassignMainDoctor}
        />
      </div>

      <button
        className="mt-4 px-8 py-3 bg-[#007bff] text-white rounded hover:bg-[#0056b3] transition-color duration-300 ease-in-out"
        onClick={() => setIsEditMode(!isEditMode)}
      >
        {isEditMode ? "Done" : "Edit Doctors"}
      </button>
    </div>
  );
};

export default Doctors;
