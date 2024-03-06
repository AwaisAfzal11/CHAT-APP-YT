import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:"true"
    },
    recieverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: "true"
    },
    message:{
        type:"String",
        require:"true"
    }
    //created at, updated at
},{timestamps: true });

const Message = mongoose.model("Message",messageSchema)
export default Message;
