import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatientCard from '../components/PatientCard';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [newPatient, setNewPatient] = useState({ name: '', age: '', gender: '' });
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        setPatients([
            { id: 1, name: "Ali Khan", age: 25, gender: "Male" },
            { id: 2, name: "Sara Ahmed", age: 30, gender: "Female" },
        ]);

    }, []);

    const handleAddPatient = (e) => {
        e.preventDefault();
        const newPat = { id: Date.now(), ...newPatient };
        setPatients([...patients, newPat]);
        setNewPatient({ name: "", age: "", gender: "" });
    };

    const handleUpdatePatient = (id, e) => {
        e.preventDefault();
        setPatients(
            patients.map((pat) =>
                pat.id === id ? { ...selectedPatient, id } : pat
            )
        );
        setSelectedPatient(null);
        setIsEditMode(false);
    };

    const handleDeletePatient = (id) => {
        setPatients(patients.filter((pat) => pat.id !== id));
        setSelectedPatient(null);
        alert("Patient deleted (dummy only).");
    };

    const handleEditPatient = (patient) => {
        setSelectedPatient(patient);
        setIsEditMode(true);
    };

    return (
        <div className="main-patient-container flex flex-wrap justify-center items-start">

            <div className="form-sections bg-[#fff] border-2 border-gray-300 rounded-[8px] p-4 w-[45%] mb-[306px] shadow-md">
                <h4 className="mb-4 text-center text-2xl">{isEditMode ? 'Edit Patient' : 'Add New Patient'}</h4>
                <form className="flex flex-col" onSubmit={isEditMode ? (e) => handleUpdatePatient(selectedPatient._id, e) : handleAddPatient}>
                    <label className="mb-2">Name:</label>
                    <input
                        type="text"
                        placeholder="Patient Name"
                        className="p-2 mb-4 border-2 border-gray-300 rounded-[4px]"
                        value={isEditMode ? selectedPatient.name : newPatient.name}
                        onChange={(e) =>
                            isEditMode ? setSelectedPatient({ ...selectedPatient, name: e.target.value })
                                : setNewPatient({ ...newPatient, name: e.target.value })
                        }
                    />
                    <label className="mb-2">Age:</label>
                    <input
                        type="text"
                        placeholder="Patient Age"
                        className="p-2 mb-4 border-2 border-gray-300 rounded-[4px]"
                        value={isEditMode ? selectedPatient.age : newPatient.age}
                        onChange={(e) =>
                            isEditMode ? setSelectedPatient({ ...selectedPatient, age: e.target.value })
                                : setNewPatient({ ...newPatient, age: e.target.value })
                        }
                    />
                    <label className="mb-2">Gender:</label>
                    <input
                        type="text"
                        placeholder="Patient Gender"
                        className="p-2 mb-4 border-2 border-gray-300 rounded-[4px]"
                        value={isEditMode ? selectedPatient.gender : newPatient.gender}
                        onChange={(e) =>
                            isEditMode ? setSelectedPatient({ ...selectedPatient, gender: e.target.value })
                                : setNewPatient({ ...newPatient, gender: e.target.value })
                        }
                    />
                    <button
                        type="submit"
                        className="self-start p-2 bg-[#007bff] text-white rounded-[4px] cursor-pointer hover:bg-[#0056b3] transition-color duration-300 ease-in-out"
                    >
                        {isEditMode ? 'Update Patient' : 'Add Patient'}
                    </button>
                </form>
            </div>

            <div className="patients-section w-[45%] h-screen ml-4">
                <h3 className="text-center">Patients ({patients.length})</h3>
                <div className="patient-list mt-4">
                    {patients.map(patient => (
                        <PatientCard
                            key={patient._id}
                            patient={patient}
                            onEdit={handleEditPatient}
                            onDelete={handleDeletePatient}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Patients;
