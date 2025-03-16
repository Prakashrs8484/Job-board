import React, { useEffect, useState } from "react";
import axios from "axios";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/my-jobs");

        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">My Job Listings</h2>

      {loading ? (
        <p>Loading...</p>
      ) : jobs.length > 0 ? (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job._id} className="p-4 border rounded-lg shadow">
              <h3 className="text-lg font-semibold">{job.roleName}</h3>
              <p className="text-gray-600">{job.companyName}</p>
              <p className="text-gray-500">Salary: {job.salaryRange}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs posted yet.</p>
      )}
    </div>
  );
};

export default MyJobs;
