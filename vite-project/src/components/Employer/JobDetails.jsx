import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faMapMarkerAlt,
  faMoneyBillWave,
  faUserGraduate,
  faClipboardList,
  faGlobe,
  faLayerGroup,
  faClock,
  faFileAlt,
  faCheckCircle,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const JobDetails = ({ job }) => {
  if (!job) return <p className="text-center">Select a job to view details</p>;

  const jobDetails = [
    { icon: faBuilding, label: "Company", value: job.companyName },
    { icon: faBriefcase, label: "Role", value: job.roleName },
    { icon: faMoneyBillWave, label: "Salary Range", value: job.salaryRange },
    { icon: faMapMarkerAlt, label: "Location", value: job.location },
    { icon: faClock, label: "Job Duration", value: job.duration },
    { icon: faLayerGroup, label: "Job Type", value: job.jobType?.join(", ") },
    { icon: faClipboardList, label: "Eligibility", value: job.eligibility },
    { icon: faCheckCircle, label: "Openings", value: job.openings },
    { icon: faCalendarAlt, label: "Posted On", value: new Date(job.postedAt).toLocaleDateString() },
  ];

  const Navigate = useNavigate()
  const handleApplication = (event) => {
    event.preventDefault();
    Navigate("/applications")
  }

  return (
    <div className="sticky bg-white p-6 rounded-xl shadow-xl w-full border border-gray-200 max-h-[600px] overflow-y-auto">
      {/* Background Image */}
      {job.backgroundImage && (
        <div
          className="w-full h-40 bg-cover bg-center rounded-t-xl"
          style={{ backgroundImage: `url(${job.backgroundImage})` }}
        />
      )}

      {/* Job Header */}
      <div className="p-4">
        <div className="flex items-center gap-4">
          {job.logo && (
            <img src={job.logo} alt="Company Logo" className="h-14 w-14 rounded-lg shadow-md" />
          )}
          <div>
            <h2 className="text-2xl font-semibold text-primary">{job.roleName}</h2>
            <p className="text-gray-600 flex items-center gap-2">
              <FontAwesomeIcon icon={faBuilding} className="text-gray-500" />
              {job.companyName}
            </p>
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-4">
          <button className="bg-primary text-white px-5 py-2 rounded-lg w-full font-medium hover:opacity-90 transition-all duration-200" onClick={(handleApplication)}>
            Apply Now
          </button>
        </div>
      </div>

      {/* Job Details Section (No Lines) */}
      <div className="mt-4 space-y-4">
        {jobDetails.map(
          (detail, index) =>
            detail.value && (
              <p key={index} className="text-gray-700 flex items-center gap-2">
                <FontAwesomeIcon icon={detail.icon} className="text-gray-500" />
                <span className="font-medium">{detail.label}: </span>
                {detail.value}
              </p>
            )
        )}
      </div>

      {/* Scrollable Sections (With Borders) */}
      <div className="border-t mt-4 pt-4 space-y-4">
        {/* Skills */}
        {job.requiredSkills && job.requiredSkills.length > 0 && (
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-800">Required Skills</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.requiredSkills.map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {job.languages && job.languages.length > 0 && (
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-800">Languages</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.languages.map((lang, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">
                  <FontAwesomeIcon icon={faGlobe} className="mr-2 text-gray-500" />
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Responsibilities */}
        {job.responsibilities && job.responsibilities.length > 0 && (
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-800">Responsibilities</h3>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Qualifications */}
        {job.qualifications && job.qualifications.length > 0 && (
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-800">Qualifications</h3>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              {job.qualifications.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {job.benefits && job.benefits.length > 0 && (
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-800">Benefits</h3>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Full Job Description */}
        <div className="pb-4">
          <h3 className="text-lg font-bold text-gray-800">Job Description</h3>
          <p className="text-gray-700 mt-2">{job.jobDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
