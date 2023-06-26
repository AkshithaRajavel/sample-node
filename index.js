const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.status(200).send(
    `<h1>First devops pipeline</h1>
    <li>github</li>
    <li>AWS code pipeline</li>
    <li>AWS code deploy</li>
    <li>docker</li>`);
})
app.listen(4000,console.log('server ready...'))