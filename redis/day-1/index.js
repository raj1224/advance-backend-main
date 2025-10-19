// import express from 'express';
// import  {redis}  from './redis.js';

// const app = express();
// const PORT = 4000;

// app.get('/',async(req,res)=>{
//     try {
//         const views = await redis.incr('pageViews')
//         res.send(`Number of views: ${views} times.`);
//     } catch (error) {
//         res.status(500).send('Error connecting to Redis');
//     }
// })

// app.listen(PORT,()=>{
//     console.log(`Server is running on http://localhost:${PORT}`);
// })

// day-2

import Redis from 'ioredis';

const redis = new Redis({
    host:'localhost',
    port:6379
});

async function main(){
    // await redis.set('foo','bar');
    // const value = await redis.get('foo');
    // console.log(value);

    // 1. Lists
    // *. LPUSH
    // await redis.lpush('mylist','a','b','c');

    // *. RPUSH
    // await redis.rpush('mylist','a','b','c');

    // LPOP
    // const leftPop = await redis.lpop('mylist');
    // console.log('LPOP:', leftPop);

    // RPOP
    // const rightPop = await redis.rpop('mylist');
    // console.log('RPOP:', rightPop);

    // LLEN
    // const listLength = await redis.llen('mylist');
    // console.log('LLEN:', listLength);
    
    // // LRANGE
    // const listItems = await redis.lrange('mylist',0,-1);
    // console.log('LRANGE:', listItems);

    // 2. Sets
    // SADD
    // const added=await redis.sadd('myset','a','b','c','a');
    // console.log('SADD:', added);

    // SREM 
    // const removed=await redis.srem('myset','b');
    // console.log('SREM:', removed);

    // SISMEMBER
    // const isMember=await redis.sismember('myset','a');
    // console.log('SISMEMBER:', isMember);

    // HASHMAP
    await redis.hset('user:1000','name','Alice','age','30','city','New York');

    await redis.hset('user:2000',
        {
            'name':'Bob',
            'age':'25',
            'city':'Los Angeles'
        });

    // Streams 
    // const entryId= await redis.xadd('mystream','*',
    //     'userId',
    //     '123',
    //     'action',
    //     'purchase',
    //     'product',
    //     'laptop',
    //     'amount',
    //     '1200'
    // );
    // console.log('XADD Entry ID:', entryId
    // );

    // const entries = await redis.xread('STREAMS','mystream','0');
    // // console.log('XREAD Entries:', JSON.stringify(entries));

    // entries[0][1].forEach(([id,fields])=>{
    //     const data ={};
    //     for(let i=0;i<fields.length;i+=2){
    //         data[fields[i]]=fields[i+1];
    //     }
    //     console.log(`ID: ${id}`,data);
    // });

    // const recentEntries = await redis.xrevrange('mystream','+','-','COUNT',5);

    // const recentEntries = await redis.xrevrange('mystream',``);
    // console.log('XREVRANGE Recent Entries:', recentEntries);

}
main();

