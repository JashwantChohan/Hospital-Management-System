import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AppointmnetCard from '../components/AppointmentCard'
// import "../components/AppointmentCard.css"

import Patients from './Patients';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
    const [appointments, setAppointments] = useState([])
    const [newAppointment, setNewAppointment] = useState({
        patientsName: '',
        DoctorsName: '',
        date: ''
    })
    const [selectedAppointment, setSelectedAppointment] = useState([null])
    const [isEditeMode, setIsEditMode] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5000/appointments')
            .then(response => setAppointments(response.data))
            .catch(error => console.error('Error fethcing appointment:', error))
    }, [])

    const handleAddAppointment = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5000/appointments/add', newAppointment)
            .then(response => {
                console.log(response.data)
                setAppointments([...appointments, response.data])
                setNewAppointment({
                    patientsName: '',
                    DoctorsName: '',
                    date: ''
                })
            })
            .catch(error => console.error('Error adding appointment:', error))
    }

    const handleUpdateAppointment = (id, e) => {
        e.preventDefault()

        axios.post(`http://localhost:5000/appointments/update/${id}`, selectedAppointments)
            .then(response => {
                console.log(response.data)
                const updateApp = { ...selectedAppointments, _id: id }
                setAppointments(
                    appointments.map(appointments =>
                        appointments._id === id ? updateApp : appointments
                    )
                )
                setSelectedAppointment(null)
                setIsEditMode(false)
            })
            .catch(error => console.error('Error updating appointment:', error))
    }

    const handleDeleteAppointment = (id) => {
        axios.delete(`http://localhost:5000/appointments/delete/${id}`)
            .then(response => {
                console.log(response.data)
                setAppointments(appointments.filter(appointments => appointments._id !== id))
            })
            .catch(error => console.error('Error deleting appointment:', error))
    }

    const handleEditAppointment = (appointments) => {
        setSelectedAppointment(appointments)
        setIsEditMode(true)
    }


    return (
        <div className='flex-row ' style={{ width: "100%" }}>
            <div className='flex-column  '>
                <div className='add-form flex flex-col h-screen w-[39vw] overflow-hidden '>
                    <form
                        className='appointment-form w-[38vw] mx-0 p-5 border-[1px] border-[#ddd]  rounded-[8px] bg-[#fff] shadow-md'
                        onSubmit={isEditeMode ? (e) => handleAddAppointment(selectedAppointment._id, e) : handleAddAppointment}
                    >
                        <h4 className='text-2xl mb-5'>{isEditeMode ? "Edit Appointment" : 'Add New Appointment'}</h4>
                        <label className='block mb-2'>Patients Name:</label>
                        <input className='w-full p-2 mb-4 border border-blue-500 rounded-[4px]' type="text" value={isEditeMode ? selectedAppointment.patientsName : newAppointment.patientsName}
                            onChange={(e) =>
                                isEditeMode ? setSelectedAppointment({ ...selectedAppointment, patientsName: e.target.value })
                                    : setAppointments({ ...newAppointment, patientsName: e.target.value })
                            }
                        />

                        <label className='block mb-2'>Doctor Name</label>
                        <input className='w-full p-2 mb-4 border border-blue-500 rounded-[4px]' type="text" value={isEditeMode ? selectedAppointment.DoctorsName : newAppointment.DoctorsName}
                            onChange={(e) =>
                                isEditeMode
                                    ? setSelectedAppointment({ ...selectedAppointment, DoctorsName: e.target.value })
                                    : setNewAppointment({ ...newAppointment, DoctorsName: e.target.value })
                            }
                        />

                        <label className='block mb-2' >Date:</label>
                        <input className='w-full p-2 mb-4 border border-blue-500 rounded-[4px]' type="date"
                            value={isEditeMode ? selectedAppointment.date : newAppointment.date}
                            onChange={(e) =>
                                isEditeMode ?
                                    setSelectedAppointment({ ...selectedAppointment, date: e.target.value })
                                    : setNewAppointment({ ...newAppointment, date: e.target.value })
                            }
                        />

                        <button className='bg-blue-500 text-[#fff] border-none px-2.5 py-5 rounded-[4px] cursor-pointer transition-colors duration-300 ease-linear hover:bg-[#0056b3] ' type='submit'>{isEditeMode ? 'Update Appointment' : 'Add Appointment'} </button>
                    </form>
                </div>
            </div>
            <div className='appoitnments flex flex-col items-center min-h-screen w-[30vw]'>
                <h3>Appointments({appointments.length})</h3>
                <div className='appointment-list flex flex-col items-center mb-[250px]'>
                    {appointments.map(appointment => (
                        <AppointmnetCard
                            key={appointment._id}
                            appointment={appointment}
                            onEdit={handleEditAppointment}
                            onDelete={handleDeleteAppointment}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Appointments;
