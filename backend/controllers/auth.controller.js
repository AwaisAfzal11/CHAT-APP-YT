import bcrypt from "bcryptjs"
import User from "../model/user.models.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signup = async (req, res)=>{
    try 
    {
        const {fullName,username,password,confirmPassword,gender} = req.body
        if (password !== confirmPassword){
            return res.status(400).json({error:"Password don't match"})
        }

        const user =  await User.findOne({username})

        if(user){
            return res.status(400).json({error:"User already exist"})
        }

        //HASH map here
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const boyProfilePic = `https://avatar.liara.iran.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.liara.iran.run/public/girl?username=${username}`
        //https://avatar-placeholder.iran.liara.run\
        //https://i.pravatar.cc/300

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        });

        if (newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()

        //201 is ok status
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        })
        } else {
            res.status(400).json({error:"Invalid User Data"})
        }

    }catch (error)
    {
        console.log("error in signup controller")
        res.status(500).json({error:"Error fetching "})
    }
    
    // res.send("signup user")
    // console.log ("signup")
}

export const login  =  async (req, res)=>{
    try{
        const {username, password}  = req.body
        const user = await User.findOne({username}) //User contain all(fullName, username, password...)
        if (!user){
            res.status(400).json({error:"User not found"})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect){
            res.status(400).json({error:"invalid password"})
        }
        //if (!user || !isPasswordCorrect){
          //  return res.status(400).json({error: "user doesn't exist or invalid uername/password"})
        //}

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic
        });

    } catch (error){
        console.log("Error in login controller")
        res.status(500).json({error:"Internal server error"})
    }
}

export const logout = async (req, res)=>{
    try{
        res.cookie("jwt","",{maxAge:0}) //no cookie presend becoz of ""
        res.status(200).json({message:"Logged out succesfully"})
        
    }catch(error){
        console.log("error in logout controller")
        res.status(500).json({error:"Internal server error"})
    }
}
