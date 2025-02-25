import React from "react";

const JobBoard = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">JobBoard</h1>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700">Find Jobs</a>
          <a href="#" className="text-gray-700">Companies</a>
          <a href="#" className="text-gray-700">Resources</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Post a Job</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16">
        <h2 className="text-4xl font-bold">Find Your Dream Job Today</h2>
        <p className="text-gray-600 mt-2">Discover thousands of job opportunities with all the information you need</p>
        <div className="flex justify-center mt-6 space-x-4">
          <input type="text" placeholder="Job title, keywords, or company" className="border px-4 py-2 rounded-lg" />
          <input type="text" placeholder="City or location" className="border px-4 py-2 rounded-lg" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Search</button>
        </div>
      </header>

      {/* Featured Jobs */}
      <section className="px-8 py-6">
        <h3 className="text-2xl font-bold">Featured Jobs</h3>
        <div className="grid grid-cols-2 gap-6 mt-4">
          {/* Job Card 1 */}
          <div className="border p-4 rounded-lg shadow-md">
            <h4 className="font-bold">Senior Frontend Developer</h4>
            <p className="text-gray-600">TechCorp</p>
            <p className="text-gray-500">📍 San Francisco, CA</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Apply Now</button>
          </div>

          {/* Job Card 2 */}
          <div className="border p-4 rounded-lg shadow-md">
            <h4 className="font-bold">Product Designer</h4>
            <p className="text-gray-600">DesignHub</p>
            <p className="text-gray-500">📍 Remote · Full-time</p>
            <p className="text-gray-500">💰 $90k - $120k</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobBoard;
