import React from 'react';

const PatientCard = ({ patient, onEdit, onDelete }) => {
    return (
        <div className="patient-card bg-[#fff] border border-gray-300 rounded-[8px] p-4 mb-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="m-0 font-semibold">{patient.name} - Age: {patient.age}, Gender: {patient.gender}</p>
            <div className="btn-container flex justify-between w-full mt-2">
                <button
                    className="cursor-pointer bg-[#007bff] text-white border-none rounded-[4px] p-2 hover:bg-[#0056b3]"
                    onClick={() => onEdit(patient)}
                >
                    Edit
                </button>
                <button
                    className="cursor-pointer bg-[#007bff] text-white border-none rounded-[4px] p-2 hover:bg-[#0056b3]"
                    onClick={() => onDelete(patient._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PatientCard;
