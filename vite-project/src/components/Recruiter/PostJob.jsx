import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext"; // Import context
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const recruiterId = localStorage.getItem("recruiterId");
  const [jobDetails, setJobDetails] = useState({
    companyName: "",
    logo: "",
    backgroundImage: "",
    roleName: "",
    salaryRange: "",
    openings: "",
    jobType: "",
    duration: "",
    location: "",
    eligibility: "",
    requiredSkills: "",
    languages: "",
    pay: "",
    jobDescription: "",
    responsibilities: "",
    qualifications: "",
    benefits: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value },recruiterId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("https://job-board-pbyz.onrender.com/post-jobs", 
        { ...jobDetails, recruiterId },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 201) {
        alert("Job Posted Successfully!");
        setJobDetails({
          companyName: "",
          logo: "",
          backgroundImage: "",
          roleName: "",
          salaryRange: "",
          openings: "",
          jobType: "",
          duration: "",
          location: "",
          eligibility: "",
          requiredSkills: "",
          languages: "",
          pay: "",
          jobDescription: "",
          responsibilities: "",
          qualifications: "",
          benefits: "",
        });
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light p-6">
      <h2 className="text-2xl font-bold mb-6 text-primary">Post a Job</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {Object.keys(jobDetails).map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.replace(/([A-Z])/g, " $1").trim()}
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={jobDetails[field]}
              onChange={handleChange}
              required
            />
          ))}
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-lg hover:opacity-90 transition-all"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
