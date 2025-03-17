import React, { useState, useContext } from "react";
import google from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext"; 

const Login = ({setisAuthenticated}) => {
  const { recruiterId, setRecruiterId } = useContext(AuthContext); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("https://job-board-pbyz.onrender.com/login", { email, password });

      if (response.data.message) {
        const recruiterId = response.data.recruiterId;
        console.log("Recruiter ID:", recruiterId);
        setisAuthenticated(true);
        setRecruiterId(recruiterId); // Set recruiter ID in context
        localStorage.setItem("recruiterId", recruiterId); // Store in local storage

        navigate("/"); 
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login failed!");
    }
  };

  const handleGoogleSignup = () => {
    console.log("Google Signup Clicked");
    setisAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light p-6">
      <h2 className="text-2xl font-bold mb-6 text-primary">Login</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <form className="space-y-4" onSubmit={handleLogin}>
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

          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-lg hover:opacity-90 transition-all"
          >
            Login
          </button>

          <div className="flex justify-center items-center my-3">
            <hr className="w-1/3 border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="w-1/3 border-gray-300" />
          </div>

          <div>
            <button
              onClick={handleGoogleSignup}
              className="flex items-center bg-white text-gray-700 px-4 py-2 border border-gray-400 rounded-lg w-full justify-center hover:bg-gray-100 transition-all"
            >
              <img src={google} alt="Google Logo" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <Link to="/signIn" className="text-primary hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
