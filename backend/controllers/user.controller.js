import User from "../model/user.models.js"
import  protectRoute  from "../middleware/protectRoute.js";


export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        //here you are excluding yourself
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } });

        res.status(200).json(filteredUsers); // Send filteredUsers in the response
    } catch (error) {
        console.log("error in getUsersForSidebar", error.message);
        res.status(500).json({ error: "internal server error" });
    }
};
