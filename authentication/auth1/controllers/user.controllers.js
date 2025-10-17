import { loginUsers,registerUser } from "../services/user.services.js";

export const signupUser = async(req,res)=>{
    const {username,password} = req.body;
    try{
        const user = await registerUser(username,password);
        res.status(201).json({
            message:"user created successfully",
            user
        })
    }catch(err){
        res.status(500).json({
            message:"user creation failed",
            err:err.message
        })
    }
}

export const loginUser = async(req,res)=>{}
export const logoutUser =()=>{}