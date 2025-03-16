import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  // State for filters
  const [filters, setFilters] = useState({
    jobType: "",
    workMode: "",
    skills: "",
  });

  // Handle filter selection
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <section className="text-center py-8 bg-light">
      {/* Search Bar */}
      <div className="flex justify-center items-center gap-2 bg-white border rounded-full shadow-md px-4 py-2 max-w-3xl mx-auto">
        {/* Search Input */}
        <div className="relative flex-grow">
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Job title or company"
            className="pl-10 pr-8 py-2 border-none outline-none w-full text-gray-700"
          />
        </div>

        {/* Location Input */}
        <div className="relative flex-grow">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder='City, state,country'
            className="pl-10 pr-8 py-2 border-none outline-none w-full text-gray-700"
          />
        </div>

        {/* Search Button */}
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-all">
          Find jobs
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 px-4">
        {/* Job Type */}
        <div className="relative bg-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm cursor-pointer hover:bg-gray-300 transition">
          <select name="jobType" className="bg-transparent outline-none" onChange={handleFilterChange}>
            <option value="">Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="internship">Internship</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>

        {/* Work Mode */}
        <div className="relative bg-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm cursor-pointer hover:bg-gray-300 transition">
          <select name="workMode" className="bg-transparent outline-none" onChange={handleFilterChange}>
            <option value="">Work Mode</option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        {/* Skills */}
        <div className="relative bg-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm cursor-pointer hover:bg-gray-300 transition">
          <select name="skills" className="bg-transparent outline-none" onChange={handleFilterChange}>
            <option value="">Skills</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Full-Stack Development</option>
            <option value="ai-ml">AI & ML</option>
            <option value="devops">DevOps</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Hero;
