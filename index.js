const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.status(200).send("Helllllll Yeaaaahhhhhhh!!!! :)");
})
app.listen(4000,console.log('server ready...'))