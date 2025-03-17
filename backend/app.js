const express=require('express');
const mdb=require("mongoose");
const dotenv=require("dotenv");
const bcrypt=require("bcrypt");
const User=require("./models/SignUp");
const Job = require("./models/Job");
const Application=require("./models/Application")
const cors=require("cors");
const multer=require("multer")

const app=express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
const port=process.env.PORT || 8000;
dotenv.config();

console.log(process.env.MONGODB)

mdb.connect(process.env.MONGODB)
.then(()=>{
    console.log("Connected to MongoDB");
}).catch(err=>{
    console.log("Error connecting to MongoDB",err);
});

//List all jobs
app.get("/jobs", async (req, res) => {
    try {
      const jobs = await Job.find(); 
      res.status(200).json(jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
});

//view job description

app.get("/jobs/:id", async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) return res.status(404).json({ message: "Job not found" });
      res.json(job);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
});


//Authentication
app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Email already in use" });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user with hashed password
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await newUser.save();

    res.status(201).json({ message: "Signup successful! Please log in." });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


app.post("/login",async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const recruiterId=user._id;
        if(!user){
            return res.status(404).json({message:"Enter valid User"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Password"});
        }
        res.status(200).json({message:"Valid user",recruiterId});
        console.log("Valid")
    }catch(err)
    {
        console.log("Error in login",err);
        res.status(404).json({message:"Error Occurred"});
    }
});


// Job Application
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/resumes"); // Directory where resumes will be stored
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  // Multer middleware for handling file uploads
  const upload = multer({ storage });
  
  // POST route to handle job applications
  app.post("/applications", upload.single("resume"), async (req, res) => {
    try {
      const applicationData = { ...req.body, resume: req.file.filename };
      const application = new Application(applicationData);
      await application.save();
      res.status(201).json({ message: "Application submitted successfully!" });
    } catch (error) {
      console.error("Error submitting application:", error);
      res.status(500).json({ error: "Failed to submit application" });
    }
  });



// POST a new job
app.post("/post-jobs",  async (req, res) => {
  try {
    console.log(req.body);
    const newJob = new Job({
      ...req.body, 
    });
    console.log(newJob.recruiterId)
    await newJob.save(); 
    res.status(201).json({ message: "Job posted successfully", job: newJob });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


//Get my-jobs
app.get("/my-jobs", async (req, res) => {
  try {
    const recruiterId = req.headers.recruiterid;
    const jobs = await Job.find({ recruiter: recruiterId }); 
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
});

//Update job
app.put("/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "Error updating job", error });
  }
});
//delete job
app.delete("/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job", error });
  }
});

app.get('/',(req,res)=>{
    res.send("Welcome")
}
);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});