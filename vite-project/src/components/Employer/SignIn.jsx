import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const navigate = useNavigate(); 

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      });

      console.log(response.data);
      alert("Signup Successful! Redirecting to login...");
      navigate("/login"); 
    } catch (error) {
      console.error("Signup failed", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light p-6">
      <h2 className="text-2xl font-bold mb-6 text-primary">Sign Up</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block text-sm font-medium">First Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Last Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password:</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number:</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-lg hover:opacity-90 transition-all"
          >
            Sign Up
          </button>

          <div className="text-center mt-4">
            <span>Have an account? </span>
            <Link to="/login" className="text-primary hover:underline">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
