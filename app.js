const express = require("express")
const app = express()

app.use((req,res,next)=>{
    console.log('Time: ',Date.now());
    next();
})

app.get('/',(req,res)=>{
    res.send('Successful response.');
})

app.listen(2000,()=>console.log("listening on port 3000"))