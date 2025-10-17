import mongoose from "mongoose";


export const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('database connected successfully');
    } catch (error) {
        console.log('error while connecting to db',error);
        throw error;
    }
}

