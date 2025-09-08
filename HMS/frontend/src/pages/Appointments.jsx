import React, { useState, useEffect, use } from 'react';
import axios from 'axios'
import AppointmnetCard from '../components/AppointmentCard'
import './Appointment.css'
import Patients from './Patients';

const Appointments = () => {
    const [appointments, setAppointments] = useState([])
    const [newAppointment, setNewAppointment] = useState({
        patientsName: '',
        DoctorsName: '',
        Date: ''
    })
    const [selectedAppointments, setSelectedAppointments] = useState([null])
    const [isEditeMode, setIsEditMode] = useState(false                  )

    //     return (

    //     );
}

export default Appointments;
    