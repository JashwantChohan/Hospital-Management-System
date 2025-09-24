import React from "react";

const AppointmentCard = ({ appointment, onEdit, onDelete }) => {
  return (
    <div className="appointment-card border border-gray-300 rounded-[8px] w-[300px] p-4 mx-4 my-2 bg-[#fff] shadow-md transition-shadow duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]">
      <p className="text-[16px] mb-2.5">
        <span className="font-black">Patient:</span> {appointment.patientName}
      </p>
      <p className="text-[16px] mb-2.5">
        <span className="font-black">Doctor:</span> {appointment.doctorName}
      </p>
      <p className="text-[16px] mb-2.5">
        <span className="font-black">Date:</span>{" "}
        {new Date(appointment.date).toLocaleDateString()}
      </p>
      <p className="text-[16px] mb-2.5">
        <span className="font-black">Address:</span> {appointment.address}
      </p>
      <p className="text-[16px] mb-2.5">
        <span className="font-black">Fees:</span> Rs. {appointment.fees}
      </p>
      <div className="btn-container mt-3 flex gap-2">
        <button
          className="bg-[#007bff] text-[#fff] px-3 py-2 rounded hover:bg-[#0056b3] transition transition-color duration-300 ease-in-out"
          onClick={() => onEdit(appointment)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-[#fff] px-3 py-2 rounded hover:bg-red-700 transition transition-color duration-300 ease-in-out"
          onClick={() => onDelete(appointment._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
