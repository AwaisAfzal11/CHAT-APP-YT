// const express = require("express")
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

import authRoutes from  "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from  "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";

// Replace EventEmitter with mitt
// Replace EventEmitter with createNanoEvents
// Use EventEmitter as before


const app = express()
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // middle-ware (access req.body from auth.controller.js)
app.use (cookieParser());

app.use("/api/auth",authRoutes) ; // middle ware for signup, login and logout
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/", (req, res)=>{
//root route http://localhost:5000
//res.send("Hello World1") 
// });


// app.get("/api/auth/signup",(req,res)=>{
//     console.log("signup running")
// });

app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`server running on port ${PORT}`)
});
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// // const express = require("express")
// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser"
// import mitt from "mitt"; // Import mitt

// import authRoutes from  "./routes/auth.routes.js";
// import messageRoutes from "./routes/message.routes.js"
// import userRoutes from  "./routes/user.routes.js"

// import connectToMongoDB from "./db/connectToMongoDB.js";

// // Replace EventEmitter with mitt
// const emitter = mitt();

// const app = express();
// const PORT = process.env.PORT || 5000;

// dotenv.config();

// app.use(express.json()); // middle-ware (access req.body from auth.controller.js)
// app.use (cookieParser());

// app.use("/api/auth",authRoutes) ; // middle ware for signup, login and logout
// app.use("/api/messages",messageRoutes);
// app.use("/api/users",userRoutes);

// // app.get("/", (req, res)=>{
// //root route http://localhost:5000
// //res.send("Hello World1") 
// // });


// // app.get("/api/auth/signup",(req,res)=>{
// //     console.log("signup running")
// // });

// app.listen(PORT,()=>{
//     connectToMongoDB()
//     console.log(`server running on port ${PORT}`)
// });
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

