import express from 'express';
import dotenv from 'dotenv'
import session from 'express-session';

import { connectDb } from './config/db.js';
import userRoutes from './routes/user.routes.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT;

// global routes
app.use(express.json());

app.use(
  session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:60 * 1000 * 10} // 10 min
  })
)



app.get('/',(req,res)=>{
    res.send('hello ')
})

app.use('/api/user',userRoutes);

connectDb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is listening on port http://localhost:${PORT}`);
    })
})
.catch((err)=>{
    console.log('db connection failed',err);
})