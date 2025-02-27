const express=require('express');
const mdb=require("mongoose");
const dotenv=require("dotenv");
const bcrypt=require("bcrypt");
const signSchema=require("./models/SignUp")

const app=express();
app.use(express.json());
const port=process.env.PORT || 8000;
dotenv.config();

console.log(process.env.MONGODB)

mdb.connect(process.env.MONGODB)
.then(()=>{
    console.log("Connected to MongoDB");
}).catch(err=>{
    console.log("Error connecting to MongoDB",err);
});
app.post("/signup",async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newSignup=new signSchema({
            name,
            email,
            password:hashedPassword
        });
        newSignup.save();
        console.log("name,email,password",name,email,password);
        res.send({msg:"Signup Successfull"});
    }catch(err){
        console.log("Error in signup",err);
        res.status(400).send("Error in signup");
    }
});
app.post("/delete",(req,res)=>{
    signSchema.deleteMany({name:"Prakash"});
    res.send({msg:"Deleted"});
})
app.post("/login",async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await signSchema.findOne({email});
        if(!user){
            return res.status(404).json({message:"Enter valid User"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Password"});
        }
        res.status(200).json({message:"Valid user"});
        console.log("Valid")
    }catch(err)
    {
        console.log("Error in login",err);
        res.status(404).json({message:"Error Occurred"});
    }
});

app.get('/',(req,res)=>{
    res.sendFile("C:/PRAKASH/SJITMERN/backend/index.html");
}
);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});