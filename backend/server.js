const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')
require('dotenv').config();
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT= process.env.port || 200;

app.listen(PORT, ()=>{
    console.log(`Listen at port no. ${PORT}`)
})