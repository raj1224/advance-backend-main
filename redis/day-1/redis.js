import Redis from 'ioredis';

const redis = new Redis();

redis.on('connect',()=>{
    console.log('redis connected');
})  
export {redis};