
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
            .catch(error => console.error('Error fetching Doctors', error))
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
        <div className="main-doc-container flex flex-wrap justify-center items-center ">
            <div className="form-sections bg-[#fff] border-2 border-gray-300 rounded-[8px] p-4 w-[45%] mb-[306px] shadow-md ">
                <h4 className='mb-4 text-center text-2xl '>{isEditMode ? 'Edit Doctor' : 'Add New Doctor'}</h4>
                <form className='flex flex-col' onSubmit={isEditMode ? (e) => handleUpdateDoctor(selectedDoctor._id, e) : handleAddDoctor}>
                    <label className='mb-2'> Name:</label>
                    <input className='p-2 mb-4 border-2 border-gray-300 rounded-[4px]' placeholder='Doctor Name' type="text"
                        value={isEditMode ? selectedDoctor.name : newDoctor.name}
                        onChange={(e) =>
                            isEditMode ? setSelectedDoctor({ ...selectedDoctor, name: e.target.value })
                                : setNewDoctor({ ...newDoctor, name: e.target.value })
                        }
                    />
                    <br />
                    <label className='mb-2'>Specialty: </label>
                    <input className='p-2 mb-4 border-2 border-gray-300 rounded-[4px]' placeholder='Speciality' type="text"
                        value={isEditMode ? selectedDoctor.speciality : newDoctor.speciality}
                        onChange={(e) =>
                            isEditMode ? setSelectedDoctor({ ...selectedDoctor, speciality: e.target.value }) : setNewDoctor({ ...newDoctor, speciality: e.target.value })
                        }
                    />
                    <br />
                    <button className='self-start p-2 bg-[#007bff] text-[#fff] border-none rounded-[4px] cursor-pointer hover:bg-[#0056b3]' type='submit'>{isEditMode ? 'update Doctor' : 'Add Doctor'}</button>
                </form>
            </div>

            <div className="doctors-section w-[45%] h-screen text-center ml-4">
                <h3>Doctors({doctors.length})</h3>
                <div className="doctor-list ">
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
