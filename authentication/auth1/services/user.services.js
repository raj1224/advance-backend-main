import bcrypt from 'bcrypt';
import {User} from '../models/user.models.js'

export const registerUser= async (username,password)=>{
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({username,password:hashedPassword});
    return await newUser.save();
}

export const loginUsers= async(username,password)=>{
    const user = await User.findOne({username});

}