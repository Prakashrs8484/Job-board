import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBriefcase, FaUsers, FaChartBar, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

const Dashboard = ({ isAuthenticated, setisAuthenticated }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();
    setisAuthenticated(false);
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <div className="bg-[#E5E7EB] min-h-screen p-6">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md rounded-xl mb-6">
        <h1 className="text-2xl font-bold text-[#1E3A8A]">Recruiter Dashboard</h1>
        
        {/* Profile / Sign-Out */}
        {isAuthenticated ? (
          <div className="relative">
            <FaUserCircle
              className="text-3xl cursor-pointer text-[#1E3A8A] hover:text-[#14B8A6] transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
                <ul className="py-2">
                  <li>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                      <FaUserCircle className="mr-2"/> Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                      <FaCog className="mr-2"/> Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 flex items-center"
                    >
                      <FaSignOutAlt className="mr-2"/> Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signIn" className="text-gray-700 hover:text-[#1E3A8A] font-semibold">Sign in</Link>
        )}
      </nav>

      {/* Dashboard Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* My Jobs */}
        <Link to="/my-jobs" className="bg-white p-6 rounded-2xl shadow-md flex items-center space-x-4 hover:shadow-lg transition">
          <FaBriefcase className="text-4xl text-[#1E3A8A]" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">My Jobs</h3>
            <p className="text-gray-500">Manage your posted jobs</p>
          </div>
        </Link>

        {/* Applications */}
        <Link to="/applications" className="bg-white p-6 rounded-2xl shadow-md flex items-center space-x-4 hover:shadow-lg transition">
          <FaUsers className="text-4xl text-[#14B8A6]" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Applications</h3>
            <p className="text-gray-500">View job applications</p>
          </div>
        </Link>

        {/* Analytics */}
        <Link to="/recruiter/analytics" className="bg-white p-6 rounded-2xl shadow-md flex items-center space-x-4 hover:shadow-lg transition">
          <FaChartBar className="text-4xl text-[#1E3A8A]" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Analytics</h3>
            <p className="text-gray-500">Track job performance</p>
          </div>
        </Link>
      </div>

      {/* Post Job Button */}
      <div className="mt-8 flex justify-center">
        <Link to="/recruiter/post-job" className="bg-[#14B8A6] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#11998e] transition">
          + Post a New Job
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
