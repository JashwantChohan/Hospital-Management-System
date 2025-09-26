import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
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
    const [selectedAppointment, setSelectedAppointment] = useState(null)
    const [isEditMode, setIsEditMode] = useState(false)
=======
import axios from 'axios';
import AppointmentCard from '../components/AppointmentCard';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    address: '',
    fees: ''
  });
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
>>>>>>> development

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/appointments')
  //     .then((response) => setAppointments(response.data))
  //     .catch((error) => console.error('Error fetching appointments:', error));
  // }, []);

  const handleAddAppointment = (e) => {
    e.preventDefault();

    const newApp = {
      id: Date.now(),
      ...newAppointment,
    };
    setAppointments([...appointments, newApp]);
    setNewAppointment({
      patientName: "",
      doctorName: "",
      date: "",
      address: "",
      fees: "",
    });

    // axios
    //   .post('http://localhost:5000/appointments/add', newAppointment)
    //   .then((response) => {
    //     setAppointments([...appointments, response.data]);
    //     setNewAppointment({
    //       patientName: '',
    //       doctorName: '',
    //       date: '',
    //       address: '',
    //       fees: ''
    //     });
    //   })
    //   .catch((error) => console.error('Error adding appointment:', error));
  };

<<<<<<< HEAD
        axios.post(`http://localhost:5000/appointments/update/${id}`, selectedAppointment)
            .then(response => {
                console.log(response.data)
                const updateApp = { ...selectedAppointment, _id: id }
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
=======
  const handleUpdateAppointment = (id, e) => {
    e.preventDefault();
>>>>>>> development

    const newApp = {
      ...newAppointment,
      id: Date.now().toString(), // ✅ give unique id
    };

    setAppointments([...appointments, newApp]);
    setNewAppointment({
      patientName: '',
      doctorName: '',
      date: '',
      address: '',
      fees: '',
    });

    // axios
    //   .post(`http://localhost:5000/appointments/update/${id}`, selectedAppointment)
    //   .then((response) => {
    //     const updatedApp = { ...selectedAppointment, _id: id };
    //     setAppointments(
    //       appointments.map((a) => (a._id === id ? updatedApp : a))
    //     );
    //     setSelectedAppointment(null);
    //     setIsEditMode(false);
    //   })
    //   .catch((error) => console.error('Error updating appointment:', error));
  };

<<<<<<< HEAD
    return (
        <div className='flex-row ' style={{ width: "100%" }}>
            <div className='flex-column  '>
                <div className='add-form flex flex-col h-screen w-[39vw] overflow-hidden '>
                    <form
                        className='appointment-form w-[38vw] mx-0 p-5 border-[1px] border-[#ddd]  rounded-[8px] bg-[#fff] shadow-md'
                       onSubmit={isEditMode ? (e) => handleUpdateAppointment(selectedAppointment._id, e) : handleAddAppointment}

                    >
                        <h4 className='text-2xl mb-5'>{isEditMode ? "Edit Appointment" : 'Add New Appointment'}</h4>
                        <label className='block mb-2'>Patients Name:</label>
                        <input className='w-full p-2 mb-4 border border-blue-500 rounded-[4px]' type="text" value={isEditMode ? selectedAppointment.patientsName : newAppointment.patientsName}
                            onChange={(e) =>
                                isEditMode ? setSelectedAppointment({ ...selectedAppointment, patientsName: e.target.value })
                                    : setNewAppointment({ ...newAppointment, patientsName: e.target.value })
                            }
                        />

                        <label className='block mb-2'>Doctor Name</label>
                        <input className='w-full p-2 mb-4 border border-blue-500 rounded-[4px]' type="text" value={isEditMode ? selectedAppointment.DoctorsName : newAppointment.DoctorsName}
                            onChange={(e) =>
                                isEditMode
                                    ? setSelectedAppointment({ ...selectedAppointment, DoctorsName: e.target.value })
                                    : setNewAppointment({ ...newAppointment, DoctorsName: e.target.value })
                            }
                        />

                        <label className='block mb-2' >Date:</label>
                        <input className='w-full p-2 mb-4 border border-blue-500 rounded-[4px]' type="date"
                            value={isEditMode ? selectedAppointment.date : newAppointment.date}
                            onChange={(e) =>
                                isEditMode ?
                                    setSelectedAppointment({ ...selectedAppointment, date: e.target.value })
                                    : setNewAppointment({ ...newAppointment, date: e.target.value })
                            }
                        />

                        <button className='bg-blue-500 text-[#fff] border-none px-2.5 py-5 rounded-[4px] cursor-pointer transition-colors duration-300 ease-linear hover:bg-[#0056b3] ' type='submit'>{isEditMode ? 'Update Appointment' : 'Add Appointment'} </button>
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
=======
  const handleDeleteAppointment = (id) => {

    setAppointments(appointments.filter((a) => a.id !== id));
    alert("Appointment deleted (dummy only).");

    // axios
    //   .delete(`http://localhost:5000/appointments/delete/${id}`)
    //   .then(() => {
    //     setAppointments(appointments.filter((a) => a._id !== id));
    //   })
    //   .catch((error) => console.error('Error deleting appointment:', error));
  };

  const handleEditAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setIsEditMode(true);
  };

  return (
    <div className="flex-row" style={{ width: '100%' }}>
      <div className="flex-column">
        <div className="add-form flex flex-col h-screen w-[39vw] overflow-hidden">
          <form
            className="appointment-form w-[38vw] mx-0 p-5 border-[1px] border-[#ddd] rounded-[8px] bg-[#fff] shadow-md"
            onSubmit={
              isEditMode
                ? (e) => handleUpdateAppointment(selectedAppointment._id, e)
                : handleAddAppointment
            }
          >
            <h4 className="text-2xl mb-5">
              {isEditMode ? 'Edit Appointment' : 'Add New Appointment'}
            </h4>

            <label className="block mb-2">Patient Name:</label>
            <input
              className="w-full p-2 mb-4 border border-blue-500 rounded-[4px]"
              type="text"
              value={
                isEditMode ? selectedAppointment.patientName : newAppointment.patientName
              }
              onChange={(e) =>
                isEditMode
                  ? setSelectedAppointment({
                    ...selectedAppointment,
                    patientName: e.target.value
                  })
                  : setNewAppointment({ ...newAppointment, patientName: e.target.value })
              }
            />

            <label className="block mb-2">Doctor Name:</label>
            <input
              className="w-full p-2 mb-4 border border-blue-500 rounded-[4px]"
              type="text"
              value={
                isEditMode ? selectedAppointment.doctorName : newAppointment.doctorName
              }
              onChange={(e) =>
                isEditMode
                  ? setSelectedAppointment({
                    ...selectedAppointment,
                    doctorName: e.target.value
                  })
                  : setNewAppointment({ ...newAppointment, doctorName: e.target.value })
              }
            />

            <label className="block mb-2">Date:</label>
            <input
              className="w-full p-2 mb-4 border border-blue-500 rounded-[4px]"
              type="date"
              value={isEditMode ? selectedAppointment.date : newAppointment.date}
              onChange={(e) =>
                isEditMode
                  ? setSelectedAppointment({ ...selectedAppointment, date: e.target.value })
                  : setNewAppointment({ ...newAppointment, date: e.target.value })
              }
            />

            <label className="block mb-2">Address:</label>
            <input
              className="w-full p-2 mb-4 border border-blue-500 rounded-[4px]"
              type="text"
              value={isEditMode ? selectedAppointment.address : newAppointment.address}
              onChange={(e) =>
                isEditMode
                  ? setSelectedAppointment({
                    ...selectedAppointment,
                    address: e.target.value
                  })
                  : setNewAppointment({ ...newAppointment, address: e.target.value })
              }
            />

            <label className="block mb-2">Fees:</label>
            <input
              className="w-full p-2 mb-4 border border-blue-500 rounded-[4px]"
              type="number"
              value={isEditMode ? selectedAppointment.fees : newAppointment.fees}
              onChange={(e) =>
                isEditMode
                  ? setSelectedAppointment({
                    ...selectedAppointment,
                    fees: e.target.value
                  })
                  : setNewAppointment({ ...newAppointment, fees: e.target.value })
              }
            />

            <button
              className="bg-blue-500 text-[#fff] border-none px-4 py-2 rounded-[4px] cursor-pointer transition-colors duration-300 ease-linear hover:bg-[#0056b3]"
              type="submit"
            >
              {isEditMode ? 'Update Appointment' : 'Add Appointment'}
            </button>
          </form>
>>>>>>> development
        </div>
      </div>

      <div className="appointments flex flex-col items-center min-h-screen w-[30vw]">
        <h3>Appointments ({appointments.length})</h3>
        <div className="appointment-list flex flex-col items-center mb-[250px]">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id ?? appointment._id}   
              appointment={appointment}
              onEdit={handleEditAppointment}
              onDelete={handleDeleteAppointment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
