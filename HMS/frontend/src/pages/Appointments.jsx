import React, { useState, useEffect, use } from 'react';
import axios from 'axios'
import AppointmnetCard from '../components/AppointmentCard'
// import './Appointment.css'
import Patients from './Patients';

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
        <div>
            <div>
                <div>
                    <h4>{isEditeMode ? "Edit Appointment" : 'Add new Appointment '}</h4>
                    <form
                        className='appointment-form'
                        onSubmit={isEditeMode ? (e) => handleAddAppointment(selectedAppointment._id, e) : handleAddAppointment}
                    >
                        <label>Patients Name:</label>
                        <input type="text" value={isEditeMode ? selectedAppointment.patientsName : newAppointment.patientsName}
                            onChange={(e) =>
                                isEditeMode ? setSelectedAppointment({ ...selectedAppointment, patientsName: e.target.value })
                                    : setAppointments({ ...newAppointment, patientsName: e.target.value })
                            }
                        />

                        <label>Doctor Name</label>
                        <input type="text" value={isEditeMode ? selectedAppointment.DoctorsName : newAppointment.DoctorsName}
                            onChange={(e) =>
                                isEditeMode
                                    ? setSelectedAppointment({ ...selectedAppointment, DoctorsName: e.target.value })
                                    : setNewAppointment({ ...newAppointment, DoctorsName: e.target.value })
                            }
                        />

                        <label >Date:</label>
                        <input type="date"
                            value={isEditeMode ? selectedAppointment.date : newAppointment.date}
                            onChange={(e) =>
                                isEditeMode ?
                                    setSelectedAppointment({ ...selectedAppointment, date: e.target.value })
                                    : setNewAppointment({ ...newAppointment, date: e.target.value })
                            }
                        />

                        <button type='submit'>{isEditeMode ? 'Update Appointment' : 'Add Appointment'} </button>
                    </form>
                </div>
            </div>
            <div className='appoitnment'>
                <h3>Appointments({appointments.length})</h3>
                <div className='appointment-list'>
                    {appointments.map(appointments => (
                        <AppointmnetCard
                            key={appointments._id}
                            appointment={appointments}
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
