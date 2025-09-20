
import React from "react";

const DoctorCard = ({ doctor, onEdit, onDelete }) => {
    return (
        <div className="doctor-card bg-[#fff] border border-gray-300 rounded-[8px] p-4 mb-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="m-0">{doctor.name} - {doctor.specialty} </p>

            <div className="btn-container flex justify-between w-full">
                <button className="mt-2 cursor-pointer bg-[#007bff] text-[#fff] border-8 rounded-[4px] p-2 hover:bg-[#0056b3]" onClick={() => onEdit(doctor)}>Edit</button>
                <button className="mt-2 cursor-pointer bg-[#007bff] text-[#fff] border-none rounded-[4px] p-2 hover:bg-[#0056b3]" onClick={() => onDelete(doctor._id)}>Delete</button>
            </div>
        </div>
    )
}

export default DoctorCard;
