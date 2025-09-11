import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorCard from '../components/DoctorCard'
// import './doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    const [newDoctor, setNewDoctor] = useState({ name: '', speciality: '' })
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [isEditMode, setIsEditMode] = useState(false)

    useEffect(() => {
        axios
            .get('http://localhost:5000/doctors')
            .then(response => setDoctors(response.data))
            .catch(error, console.error('Error fetching Doctors', error))
    }, [])

    const handleAddDoctor = (e) => {
        e.preventDefault()

        axios
            .post('http://localhost:5000/doctors/add', newDoctor)
            .then(response => {
                console.log("doc", response.data)
                setDoctors([...doctors, response.data])
                setNewDoctor({ name: '', speciality: '' })
            })
            .catch(error => console.error('Error adding doctors', error))
    }

    const handleUpdateDoctor = (id, e) => {
        e.preventDefault()
        axios
            .post(`http://localhost:5000/doctors/update/${id}`, selectedDoctor)
            .then(response => {
                const udpateDoc = { ...selectedDoctor, _id: id }
                console.log('update doc', udpateDoc)
                setDoctors(doctors.map(doctor => (doctor._id === id ? udpateDoc : doctor)))
                selectedDoctor(null)
                isEditMode(false)
            })
            .catch(error => console.error('Error updating doctor', error))
    }

    const handleDeleteDoctor = (id) => {
        axios
            .delete(`http://localhost:5000/doctors/delete/${id}`)
            .then(response => {
                console.log(response.data)
                setDoctors(doctors.filter(doctor => doctor._id !== id))
            })
            .catch(error => console.error('Error deleting doctor:', error))
    }

    const handleEditDoctor = (doctor) => {
        setSelectedDoctor(doctor)
        setIsEditMode(true)
    }


    return (
        <div className="main-doc-container">
            <div className="form-sections">
                <h4>{isEditMode ? 'Edit Doctor' : 'Add New Doctor'}</h4>
                <form onSubmit={isEditMode ? (e) => handleUpdateDoctor(selectedDoctor._id, e) : handleAddDoctor}>
                    <label> Name:</label>
                    <input type="text"
                        value={isEditMode ? selectedDoctor.name : newDoctor.name}
                        onChange={
                            isEditMode ? setSelectedDoctor({ ...selectedDoctor, name: e.target.value }) : setNewDoctor({ ...newDoctor, name: e.target.value })
                        }
                    />
                    <br />
                    <input type="text"
                        value={isEditMode ? selectedDoctor.speciality : newDoctor.speciality}
                        onChange={
                            isEditMode ? setSelectedDoctor({ ...selectedDoctor, speciality: e.target.value }) : setNewDoctor({ ...newDoctor, speciality: e.target.value })
                        }
                    />
                    <br />
                    <button type='submit'>{isEditMode ? 'update Doctor' : 'Add Doctor'}</button>
                </form>
            </div>

            <div className="doctors-section">
                <h3>Doctors({doctors.length})</h3>
                <div className="doctor-list">
                    {doctors.map(doctor => (
                        <DoctorCard
                            key={doctor._id}
                            doctor={doctor}
                            onEdit={handleEditDoctor}
                            onDelete={handleDeleteDoctor}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Doctors;