import React from "react";
import {
    BrowserRouter as Router,
    Routes, Route,
    Link, useNavigate
} from 'react-router-dom'
import Appointments from './pages/Appointments'
import Doctors from './pages/Doctors'
import Patients from './pages/Patients'
import './App.css'

const App = () => {
    const isLinkActive = (path) =>
        window.location.pathname === path

    return (
        <Router>
            <div className="container bg-gray-100 ">
                <h1 className="text-green-600 text-3xl mb-4 font-bold" >
                    Hospital Management App
                </h1>
                <nav className="bg-[#00a7aa] p-2.5 rounded-xl ">
                    <ul className="list-none  p-0 m-0 flex">
                        <li className="mr-[20px]">
                            <Link to="/appointments" className={`no-underline decoration-white font-bold hover:decoration-[#ffd700] ${isLinkActive('/appointments') ? 'text-[#ffd700]' : ''}`}>
                                Appointments
                            </Link>
                        </li>
                        <li className="mr-[20px]">
                            <Link to="/doctors" className={`no-underline decoration-white font-bold hover:decoration-[#ffd700] ${isLinkActive('/doctors') ? 'text-[#ffd700]' : ''}`}>
                                Doctors
                            </Link>
                        </li>
                        <li className="mr-[20px]">
                            <Link to="/patients" className={`no-underline decoration-white font-bold hover:decoration-[#ffd700] ${isLinkActive('/patients') ? 'text-[#ffd700]' : ''}`}>
                                Patients
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Appointments />}> </Route>
                    <Route path="/appointments" element={<Appointments />}> </Route>
                    <Route path="/doctors" element={<Doctors />}> </Route>
                    <Route path="/patients" element={<Patients />}> </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;