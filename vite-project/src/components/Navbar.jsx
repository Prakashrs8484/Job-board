import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">JobBoard</h1>
      <div>
      <Link to="./home">Home</Link>
      </div>
      <div className="flex space-x-6">
        <Link to='/signIn'>Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
