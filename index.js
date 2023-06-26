const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.status(200).send("First CI/CD pipeline :)");
})
app.listen(4000,console.log('server ready...'))