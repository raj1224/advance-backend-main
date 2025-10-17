import mongoose from 'mongoose'

export const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('database connected');
    } catch (error) {
        console.log('database is not connected',error.message);
    }
}