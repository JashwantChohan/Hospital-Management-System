import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (username === "admin" && password === "admin123") {
            localStorage.setItem("isLoggedIn", true);
            navigate("/appointments");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="border p-2 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default login;