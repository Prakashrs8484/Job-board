import React, { useEffect, useState } from "react";
import axios from "axios";

const Applications = ({ jobId }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(`https://job-board-pbyz.onrender.com/applications/${jobId}`);
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [jobId]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Job Applications</h2>

      {loading ? (
        <p>Loading applications...</p>
      ) : applications.length > 0 ? (
        <ul className="space-y-4">
          {applications.map((applicant) => (
            <li key={applicant._id} className="p-4 border rounded-lg shadow">
              <h3 className="text-lg font-semibold">{applicant.name}</h3>
              <p className="text-gray-600">{applicant.email}</p>
              <p className="text-gray-500">Phone: {applicant.phone}</p>
              <p className="text-gray-500">Skills: {applicant.skills.join(", ")}</p>
              <a
                href={applicant.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Resume
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No applications for this job yet.</p>
      )}
    </div>
  );
};

export default Applications;
