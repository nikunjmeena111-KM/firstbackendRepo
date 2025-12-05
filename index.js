require('dotenv').config()
const express = require('express')
// import express from "express" , we can also use this line instead of above line this is due to diff in  modules 
const app = express()
const port = 5000 // this is port no just like we have usb , type C etc ports, we also have virtual ports in computer more than 65000 ports so using this variable with any number between 0 and 65000 we are using any one of that virtual port

app.get('/', (req, res) => {
  res.send('Hello World!')
})// get is type of reqest 

app.get('/twitter',(req,res)=>{
    res.send('we are studying the backend fronm chai aur code')
})

app.get('/instagram',(req,res)=>{
    res.send('<h1>bhag bsdk!, padhle kal paper hai</h1>')
})// yaha pe "/" ka use karna imp hai is ebhul nahi sakte hai 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})// now as we send request we have to listen , so using this line of code we listen 