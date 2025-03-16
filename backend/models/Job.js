const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  logo: { type: String, required: true }, // URL of the company logo
  backgroundImage: { type: String, required: true }, // URL of background image
  roleName: { type: String, required: true },
  salaryRange: { type: String, required: true },
  openings: { type: Number, required: true },
  jobType: { type: [String], required: true }, // e.g., ["Full-time", "Remote"]
  duration: { type: String, required: true },
  location: { type: String, required: true },
  eligibility: { type: String, required: true },
  requiredSkills: { type: [String], required: true },
  languages: { type: [String], required: true },
  pay: { type: String, required: true },
  jobDescription: { type: String, required: true },
  responsibilities: { type: [String], required: true },
  qualifications: { type: [String], required: true },
  benefits: { type: [String], required: true },
  postedAt: { type: Date, default: Date.now },
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
});

module.exports = mongoose.model("Job", jobSchema);
