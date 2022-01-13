const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT  || 5000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))

app.set("views","./src/views");
app.set("view engine","ejs");

app.get("/", (req,res) =>{
    res.render('index',{username: 'hello',customer: ["best","kik"]});
})

app.listen(PORT,()=>{
    console.log("Listen on port"+ PORT);
})