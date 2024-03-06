import jwt from "jsonwebtoken";
import User from "../model/user.models.js"


const protectRoute =  async (req,res,next)=>{
    try{
        const  token = req.cookies.jwt;
        if (!token){
            return res.status(401).json({error:"Unauthorized, no token found!"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET) 
 
        if (!decoded){
            return res.status(401).json({error:"Invalid token!"})
        }

        const user = await User.findById(decoded.userId).select("-password")

        if (!user){
            return res.status(500).json({error:"User not found"})
        }

        req.user = user //this user is from database 

        next();
    } catch(error){
        console.log("Error in protectRoute middleware",error.message)
        res.status(500).json({error:"internal server error"})
    }
}

export default protectRoute

