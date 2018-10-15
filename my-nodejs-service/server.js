const express=require('express');
const app =express();
app.get('/',(req,res)=>{
    res.send('Hello from App Engine');
});

//listen to the app engine in port 8080
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}...`);
});

