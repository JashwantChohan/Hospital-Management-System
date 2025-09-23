import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
  useNavigate
} from "react-router-dom";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import Login from "./pages/Login";
import "./App.css";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLinkActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); 
    navigate("/login"); 
  };

  return (
    <nav className="bg-[#00a7aa] p-2.5 rounded-xl mb-4 flex justify-between items-center">
      <ul className="list-none flex p-0 m-0">
        <li className="mr-[20px]">
          <Link
            to="/appointments"
            className={`no-underline font-bold ${isLinkActive("/appointments") ? "text-[#ffd700]" : "text-white"
              }`}
          >
            Appointments
          </Link>
        </li>
        <li className="mr-[20px]">
          <Link
            to="/doctors"
            className={`no-underline font-bold ${isLinkActive("/doctors") ? "text-[#ffd700]" : "text-white"
              }`}
          >
            Doctors
          </Link>
        </li>
        <li className="mr-[20px]">
          <Link
            to="/patients"
            className={`no-underline font-bold ${isLinkActive("/patients") ? "text-[#ffd700]" : "text-white"
              }`}
          >
            Patients
          </Link>
        </li>
      </ul>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
};


const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div className="container bg-gray-100 min-h-screen">
        <h1 className="text-green-600 text-3xl mb-4 font-bold text-center">
          Hospital Management App
        </h1>

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/appointments"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Appointments />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/doctors"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Doctors />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/patients"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Patients />
                </PrivateRoute>
              </>
            }
          />

          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
