import React from "react";
import google from "../assets/google.png"
import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";


const Signup = () => {
  const [firstName, setFN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const handleGoogleSignup = () => {
    console.log("Google Signup Clicked");
    // Integrate Google Auth Here
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://sjitmern.onrender.com/signup", {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      });

      useNavigate("/login")
      console.log(response.data);
    } catch (error) {
      console.error("Signup failed", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block text-sm font-medium">First Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={firstName}
              onChange={(e) => setFN(e.target.value)}
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
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>

          <div className="text-center mt-4">
            <span>Have an account? </span>
            <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </div>
        </form>
        <div>
        <button
          onClick={handleGoogleSignup}
          className="flex items-center bg-white text-gray-700 px-4 py-2 border border-gray-400 rounded-lg w-full justify-center"
        >
          <img
            src={google}
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
