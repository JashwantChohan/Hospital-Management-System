import React from "react";

const DoctorCard = ({ 
  title, 
  doctor, 
  isEditMode, 
  onChange, 
  onSave, 
  onAssignAssistant, 
  onReassignMainDoctor 
}) => {
  return (
    <div className="doctor-card bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md w-[350px]">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {isEditMode ? (
        <form onSubmit={onSave} className="flex flex-col">
          {["name", "speciality", "address", "fees"].map((field) => (
            <input
              key={field}
              className="p-2 mb-2 border rounded"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={doctor[field] || ""}
              onChange={(e) => onChange(field, e.target.value)}
            />
          ))}

          <button
            type="submit"
            className="mt-2 p-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>
        </form>
      ) : (
        <div>
          <p><span className="font-bold">Name:</span> {doctor.name}</p>
          <p><span className="font-bold">Speciality:</span> {doctor.speciality}</p>
          <p><span className="font-bold">Address:</span> {doctor.address}</p>
          <p><span className="font-bold">Fees:</span> {doctor.fees}</p>

          {title === "Main Doctor" && (
            <button
              onClick={onAssignAssistant}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-color duration-300 ease-in-out"
            >
              Assign Assistant Doctor
            </button>
          )}

          {title === "Assistant Doctor" && (
            <button
              onClick={onReassignMainDoctor}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-color duration-300 ease-in-out"
            >
              Reassign to Main Doctor
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorCard;
