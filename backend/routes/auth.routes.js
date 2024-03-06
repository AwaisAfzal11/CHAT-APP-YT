import express from "express"
import {signup, login, logout} from "../controllers/auth.controller.js"

const router = express.Router();

// router.get("./api/auth/signup", signup)/
//changed from router.get to router.post
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// router.get("/login", (get, res)=>{
//     res.send("login route")
// });


export default router 