import React from "react";
// import './AppointmentCard.css'


const AppointmentCard = ({ appointment, onEdit, onDelete }) => {
    return (
        <div className="appointment-card border border-gray-300  rounded-[8px] w-[300px] p-4 mx-4 my-0 bg-[#fff] shadow-md transition-shadow duration-300 ease-in-out hover:shadow-[ 0 0 15px rgba(0, 0, 0, 0.2)] ">
            <p  className="text-[16px] mb-2.5">
                <span className="font-black">Patient:</span> {appointment.patientName}
            </p>
            <p className="text-[16px] mb-2.5">
                <span className="font-black">Doctor:</span> {appointment.doctorName}
            </p>
            <p className="text-[16px] mb-2.5">
                <span className="font-black">Date:</span> { new Date(appointment.date).toLocaleDateString()}
            </p>
            <div className="btn-container"> 
                <button className="bg-[#007bff] text-[#fff] border-none px-2 py-4 mr-8px cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#002e5f]" onClick={() => onEdit(appointment)}>Edit</button>
                <button className="bg-[#007bff] text-[#fff] border-none px-2 py-4 mr-8px cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#002e5f]" onClick={() => onDelete(appointment._id)}>Delete</button>
                
            </div>
        </div>
    )
}

export default AppointmentCard