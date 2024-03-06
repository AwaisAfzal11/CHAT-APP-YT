//import Message from "../model/message.model.js"
//import Conversation from "../model/conversation.model.js"
//*
import Message from "../model/message.model.js";
import Conversation from "../model/conversation.model.js";


export const sendMessage = async (req, res) =>{
    //console.log("Me ssage sended",req.params.id);
    try{

        //It contains orignal message+recieverId+senderId
        const {message} = req.body ;
        const {id:recieverId} = req.params; 
        const senderId = req.user._id //here req.user = user {protectRoute file_name}

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, recieverId]},
            //$all
        })

        if (!conversation){
            conversation = await Conversation.create({
                participants : [senderId,recieverId]
            })
        }

        const newMessage = new Message({
            //senderId = senderId
            senderId,
            recieverId,
            message,
        })

        if (newMessage){
            conversation.messages.push(newMessage._id);
            //await conversation.save(); // Save the conversation changes
            //console.log("error in sendMessage controller", error);
        }

        //await conversation.save();
        //await newMessage.save();
        await Promise.all([conversation.save(),newMessage.save()])

        res.status(201).json(newMessage)
        


    }catch(error){
        console.log("error in sendMessage controller")
        res.status(500).json({error:"internal server error"})
    }
}


export const getMessages = async (req, res) => {
    try{
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants:{$all: [senderId,userToChatId]},
        }).populate("messages");
        res.status(200).json(conversation.messages);

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

    }catch(error){
        console.log("error in sendMessage controller")
        res.status(400).json({error:"bad request"});
          
    }
    }