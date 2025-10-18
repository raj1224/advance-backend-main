import express from 'express';
import  {redis}  from './redis.js';

const app = express();
const PORT = 4000;

app.get('/',async(req,res)=>{
    try {
        const views = await redis.incr('pageViews')
        res.send(`Number of views: ${views} times.`);
    } catch (error) {
        res.status(500).send('Error connecting to Redis');
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})