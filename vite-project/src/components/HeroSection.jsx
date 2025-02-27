import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Find Your Dream Job Today</h2>
      <p className="text-gray-600 mb-6">Discover thousands of job opportunities with all the information you need</p>
      <div className="flex justify-center space-x-4">
        <input 
          type="text" 
          placeholder="Job title, keywords, or company" 
          className="border p-3 rounded-lg w-80"
        />
        <input 
          type="text" 
          placeholder="City or location" 
          className="border p-3 rounded-lg w-60"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Search</button>
      </div>
    </section>
  );
};

export default Hero;
