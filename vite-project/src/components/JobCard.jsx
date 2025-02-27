import React from "react";

const JobCard = ({ title, company, location, salary, remote }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md w-80">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700">{company}</p>
      <p className="text-gray-500">{location} {remote && "· Remote"}</p>
      <p className="text-blue-600 font-semibold">{salary}</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">Apply Now</button>
    </div>
  );
};

export default JobCard;
