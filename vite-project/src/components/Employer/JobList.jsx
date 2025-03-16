import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import JobDetails from "./JobDetails";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/jobs");
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
    <div className="container mx-auto p-6 flex gap-6 h-screen">
      {/* Scrollable Job Listings (Hidden Scrollbar) */}
      <div className="w-1/2 h-full overflow-y-auto pr-4 scrollbar-hidden">
        {/* <h2 className="text-2xl font-bold text-center mb-6 text-primary">Job Openings</h2> */}
        {loading ? (
          <p className="text-center">Loading jobs...</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <JobCard key={job._id} job={job} onSelect={() => setSelectedJob(job)} />
              ))
            ) : (
              <p>No jobs available.</p>
            )}
          </div>
        )}
      </div>

      {/* Static Job Details */}
      <div className="w-1/2 h-full sticky top-6">
        {selectedJob ? (
          <JobDetails job={selectedJob} />
        ) : (
          <p className="text-center text-gray-600">Select a job to view details</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
