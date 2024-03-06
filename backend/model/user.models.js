import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: "string",
        require:"true"
    },
    username:{
        type:"string",
        require:"true",
        unique:"true"
    },
    password:{
        type:"string",
        required:"true",
        minlength:6
    },
    gender:{
        type:"string",
        required:"true",
        enum:["male","female"]
    },
    profilePic:{
        type:"string",
        default:""
    }
    //created at: ==> Member since (date)
},{timestamps : true }); 

const User  = mongoose.model("User", userSchema);
export default User;