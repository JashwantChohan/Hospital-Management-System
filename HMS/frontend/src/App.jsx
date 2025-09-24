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
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
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
            to="/dashboard"
            className={`no-underline font-bold ${isLinkActive("/dashboard") ? "text-[#ffd700]" : "text-white"
              }`}
          >
            Dashboard
          </Link>
        </li>
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
        <li className="mr-[20px]">
          <Link
            to="/reports"
            className={`no-underline font-bold ${isLinkActive("/reports") ? "text-[#ffd700]" : "text-white"
              }`}
          >
            Reports
          </Link>
        </li>
      </ul>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition-color duration-300 ease-in-out"
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
            path="/dashboard"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              </>
            }
          />

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
          <Route
            path="/reports"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Reports />
                </PrivateRoute>
              </>
            }
          />


          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
