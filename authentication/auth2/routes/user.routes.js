import express from "express"
import User from '../models/user.models.js'
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post('/signup',async(req,res)=>{
    const {username,password} = req.body;
    try {
        const existingUser = await User.findOne({username});
        if(existingUser) return res.status(400).json({message:'user already exists'})
        
        const newUser = new User({username,password});
        await newUser.save();

        res.status(201).json({message:'user created successfully'})
            

    } catch (error) {
        res.status(500).json({message:'something went wrong'})
    }
})
router.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    try {
        const user = await User.findOne({username})
        if(!user){
            return res.status(401).json({message:'invalid credentials'})
        }
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({message:'invalid credentials'})
        }
        const token = jwt.sign({userId:user._id,username:user.username},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(200).json({message:'login succesfully',token})
    } catch (error) {
        res.status(500).json({message:'something went wrong',error: error.message})
        
    }
})
router.post('/logout',()=>{}) 

export default router;