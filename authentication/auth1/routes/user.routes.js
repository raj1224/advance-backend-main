import express from "express";

import {User} from "../models/user.models.js";
import { signupUser, loginUser, logoutUser } from "../controllers/user.controllers.js";

const {router} = express();


// create user
router.post('/signup',signupUser)
router.post('/login',loginUser)
router.post('/logout',logoutUser)

export default router;