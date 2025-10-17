import express from 'express';
import dotenv from 'dotenv';

import {connectDB} from './config/db.js'
import authRoutes from './routes/user.routes.js'
 
const app = express();
dotenv.config();

// global middlewares
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('hello')
})

app.use('/api/auth',authRoutes);

// connecting to db
connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is listening on port http://localhost:${PORT}`);
    })
})
.catch((error)=>{
    console.log(error);
})