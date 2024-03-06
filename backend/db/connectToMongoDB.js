import mongoose from "mongoose";    
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to database (mongo_db) :)")
    } catch (error){
        console.log("Error connecting to MONGO_DB", error.message)
    }
}; 
export default connectToMongoDB;