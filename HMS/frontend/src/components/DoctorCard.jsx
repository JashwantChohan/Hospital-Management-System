import React from "react";

const DoctorCard = ({ title, doctor, isEditMode, onChange, onSave }) => {
  return (
    <div className="doctor-card bg-[#fff] border border-gray-300 rounded-[8px] p-4 mb-4 shadow-md w-[350px]">
      <h3 className="text-xl mb-2">{title}</h3>

      {isEditMode ? (
        <form onSubmit={onSave} className="flex flex-col">
          <input
            className="p-2 mb-2 border rounded"
            placeholder="Name"
            value={doctor.name}
            onChange={(e) => onChange("name", e.target.value)}
          />
          <input
            className="p-2 mb-2 border rounded"
            placeholder="Speciality"
            value={doctor.speciality}
            onChange={(e) => onChange("speciality", e.target.value)}
          />
          <input
            className="p-2 mb-2 border rounded"
            placeholder="Address"
            value={doctor.address}
            onChange={(e) => onChange("address", e.target.value)}
          />
          <input
            className="p-2 mb-2 border rounded"
            placeholder="Fees"
            value={doctor.fees}
            onChange={(e) => onChange("fees", e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Save
          </button>
        </form>
      ) : (
        <div>
          <p>
            <span className="font-bold">Name:</span> {doctor.name}
          </p>
          <p>
            <span className="font-bold">Speciality:</span> {doctor.speciality}
          </p>
          <p>
            <span className="font-bold">Address:</span> {doctor.address}
          </p>
          <p>
            <span className="font-bold">Fees:</span> {doctor.fees}
          </p>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;
