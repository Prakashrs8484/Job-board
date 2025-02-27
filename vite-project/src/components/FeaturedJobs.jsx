import React from "react";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const jobs = [
    { title: "Senior Frontend Developer", company: "TechCorp", location: "San Francisco, CA", salary: "$120k - $140k", remote: false },
    { title: "Product Designer", company: "DesignHub", location: "Remote", salary: "$90k - $120k", remote: true },
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Featured Jobs</h2>
      <div className="flex space-x-6">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
