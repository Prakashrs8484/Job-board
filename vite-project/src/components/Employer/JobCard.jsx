import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faMapMarkerAlt, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

const JobCard = ({ job, onSelect }) => {
  return (
    <div 
      onClick={onSelect} 
      className="border border-gray-300 rounded-lg p-4 shadow-md w-full max-w-lg bg-white transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
    >
      {/* Job Title & Options */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-primary">{job.roleName}</h3>
        <FontAwesomeIcon icon={faEllipsisV} className="text-gray-500 cursor-pointer" />
      </div>

      {/* Company Name & Location */}
      <p className="text-gray-600 font-medium">{job.companyName} </p>
      <p className="text-gray-500 flex items-center gap-2">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
        {job.location}
      </p>

      {/* Salary & Job Type */}
      <div className="flex flex-wrap items-center gap-3 mt-2">
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md font-semibold">
          From {job.salaryRange}
        </span>
        {job.jobType.map((type, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md font-semibold">
            {type}
          </span>
        ))}
      </div>

      {/* Posted Date */}
      <p className="text-gray-500 mt-2">Active {Math.floor((Date.now() - new Date(job.postedAt)) / (1000 * 60 * 60 * 24))} days ago</p>
    </div>
  );
};

export default JobCard;
