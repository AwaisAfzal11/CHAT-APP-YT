//setup for quickee.
 import jwt from "jsonwebtoken"
 
 const generateTokenAndSetCookie = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: "15d"
        });

        res.cookie("jwt", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, // millisecond
            httpOnly: true, // can't access from other sites
            sameSite: "strict",
            secure:process.env.NODE_ENV !== "development"
        });
    } catch (error) {
        console.error("Error generating token:", error);
        // Handle the error, possibly by sending a 500 response
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export default generateTokenAndSetCookie