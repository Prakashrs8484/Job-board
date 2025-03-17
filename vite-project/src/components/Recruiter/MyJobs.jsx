import React, { useEffect, useState } from "react";
import axios from "axios";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editJob, setEditJob] = useState(null);
  const [formData, setFormData] = useState({});

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

  // Handle Delete Job
  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`http://localhost:8000/jobs/${jobId}`);
      setJobs(jobs.filter((job) => job._id !== jobId));
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  // Open Edit Form
  const handleEditClick = (job) => {
    setEditJob(job);
    setFormData({ ...job });
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Array Input Change (Skills, Responsibilities, etc.)
  const handleArrayChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value.split(",") });
  };

  // Handle Update Job
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`https://job-board-pbyz.onrender.com/jobs/${editJob._id}`, formData);
      setJobs(jobs.map((job) => (job._id === editJob._id ? response.data : job)));
      setEditJob(null);
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">My Job Listings</h2>

      {loading ? (
        <p>Loading...</p>
      ) : jobs.length > 0 ? (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job._id} className="p-4 border rounded-lg shadow flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{job.roleName}</h3>
                <p className="text-gray-600">{job.companyName}</p>
                <p className="text-gray-500">Salary: {job.salaryRange}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEditClick(job)} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(job._id)} className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs posted yet.</p>
      )}

      {/* Edit Job Modal */}
      {editJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
            <h2 className="text-xl font-bold mb-4">Edit Job</h2>

            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className="border p-2 rounded" placeholder="Company Name" />
              <input type="text" name="roleName" value={formData.roleName} onChange={handleInputChange} className="border p-2 rounded" placeholder="Job Role" />
              <input type="text" name="salaryRange" value={formData.salaryRange} onChange={handleInputChange} className="border p-2 rounded" placeholder="Salary Range" />
              <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="border p-2 rounded" placeholder="Location" />
              <input type="text" name="jobType" value={formData.jobType.join(", ")} onChange={(e) => handleArrayChange(e, "jobType")} className="border p-2 rounded" placeholder="Job Type (comma-separated)" />
              <input type="text" name="duration" value={formData.duration} onChange={handleInputChange} className="border p-2 rounded" placeholder="Duration" />
              <input type="text" name="eligibility" value={formData.eligibility} onChange={handleInputChange} className="border p-2 rounded" placeholder="Eligibility" />
              <input type="text" name="requiredSkills" value={formData.requiredSkills.join(", ")} onChange={(e) => handleArrayChange(e, "requiredSkills")} className="border p-2 rounded" placeholder="Required Skills (comma-separated)" />
              <input type="text" name="languages" value={formData.languages.join(", ")} onChange={(e) => handleArrayChange(e, "languages")} className="border p-2 rounded" placeholder="Languages (comma-separated)" />
              <input type="text" name="pay" value={formData.pay} onChange={handleInputChange} className="border p-2 rounded" placeholder="Pay" />
              <textarea name="jobDescription" value={formData.jobDescription} onChange={handleInputChange} className="border p-2 rounded" placeholder="Job Description"></textarea>
              <textarea name="responsibilities" value={formData.responsibilities.join(", ")} onChange={(e) => handleArrayChange(e, "responsibilities")} className="border p-2 rounded" placeholder="Responsibilities (comma-separated)"></textarea>
              <textarea name="qualifications" value={formData.qualifications.join(", ")} onChange={(e) => handleArrayChange(e, "qualifications")} className="border p-2 rounded" placeholder="Qualifications (comma-separated)"></textarea>
              <textarea name="benefits" value={formData.benefits.join(", ")} onChange={(e) => handleArrayChange(e, "benefits")} className="border p-2 rounded" placeholder="Benefits (comma-separated)"></textarea>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded">
                Save
              </button>
              <button onClick={() => setEditJob(null)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyJobs;
