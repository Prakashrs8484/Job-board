import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const RecruiterHome = ({ isAuthenticated, setisAuthenticated }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();
    setisAuthenticated(false);
    setDropdownOpen(false);
    navigate("/recruiter");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-primary">JobBoard</h1>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-gray-700 hover:text-primary">
          Home
        </Link>

        {/* Recruiter-Specific Links */}
        {isAuthenticated && (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-primary">
              Dashboard
            </Link>
            <Link to="/my-jobs" className="text-gray-700 hover:text-primary">
              My Jobs
            </Link>
            <Link to="/post-job" className="text-gray-700 hover:text-primary">
              Post a Job
            </Link>
          </>
        )}

        {/* Authentication Controls */}
        {isAuthenticated ? (
          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer hover:text-primary transition-all"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
                <ul className="py-2">
                  <li>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signIn" className="text-gray-700 hover:text-primary">
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default RecruiterHome;
