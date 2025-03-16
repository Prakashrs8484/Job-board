import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const ApplicationForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    course: "",
    passingYear: "",
    department: "",
    skills: "",
    experience: "",
    projects: "",
    linkedIn: "",
    portfolio: "",
    github: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("jobId", jobId);
    try {
      await axios.post("http://localhost:8000/applications", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Application submitted successfully!");
      navigate("/")
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg mx-auto mt-10 border border-gray-200">
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">Apply for this Job</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { label: "Full Name", name: "name", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone Number", name: "phone", type: "tel" },
          { label: "Course", name: "course", type: "text" },
          { label: "Year of Passing", name: "passingYear", type: "text" },
          { label: "Department", name: "department", type: "text" },
          { label: "Skills", name: "skills", type: "textarea" },
          { label: "Years of Experience", name: "experience", type: "text" },
          { label: "Projects", name: "projects", type: "textarea" },
          { label: "LinkedIn URL", name: "linkedIn", type: "url" },
          { label: "Portfolio URL", name: "portfolio", type: "url" },
          { label: "GitHub URL", name: "github", type: "url" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">{label}:</label>
            {type === "textarea" ? (
              <textarea
                name={name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                value={formData[name]}
                onChange={handleChange}
                rows="3"
                required
              />
            ) : (
              <input
                type={type}
                name={name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                value={formData[name]}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-gray-700">Resume (PDF only):</label>
          <input
            type="file"
            name="resume"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
            onChange={handleChange}
            accept=".pdf"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white p-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
