const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  resume: { type: String, required: true },
  course: { type: String, required: true },
  passingYear: { type: String, required: true },
  department: { type: String, required: true },
  skills: { type: String, required: true },
  experience: { type: String, required: true },
  projects: { type: String },
  linkedIn: { type: String },
  portfolio: { type: String },
  github: { type: String },
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
