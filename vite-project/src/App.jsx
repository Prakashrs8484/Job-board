import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Employer/Navbar";
import "./styles/index.css";
import SignIn from "./components/Employer/SignIn";
import Login from "./components/Employer/Login";
import Home from "./components/Employer/Home";
import PostJob from "./components/Recruiter/PostJob";
import JobDetails from "./components/Employer/JobDetails";
import Application from "./components/Employer/Application";
import RecruiterPage from "./components/Recruiter/RecruiterPage"; 
import RecruiterHome from "./components/Recruiter/RecruiterHome";
import Dashboard from "./components/Recruiter/DashBoard";
import MyJobs from "./components/Recruiter/MyJobs";
import AuthProvider from "./components/context/AuthContext";


const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/recruiter"
          element={
            <RecruiterPage>
              <RecruiterHome isAuthenticated={isAuthenticated} setisAuthenticated={setisAuthenticated}/>
            </RecruiterPage>
          }
        />
        <Route
          path="/post-job"
          element={
            <RecruiterPage>
              <PostJob />
            </RecruiterPage>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RecruiterPage>
              <Dashboard />
            </RecruiterPage>
          }
        />
        <Route
        path="/my-jobs"
        element={
          <RecruiterPage>
            <MyJobs />
          </RecruiterPage>
        }
        />

        <Route path="/" element={<Navbar isAuthenticated={isAuthenticated} setisAuthenticated={setisAuthenticated} />} />
      </Routes>

      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setisAuthenticated={setisAuthenticated} />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/applications" element={<Application />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
