const mdb=require("mongoose");
const signSchema=new mdb.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const signup_schema=mdb.model("signup_schema",signSchema);
module.exports=signup_schema;

