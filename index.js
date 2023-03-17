const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("Welcome to The AWS HOme")
})


app.listen(8080,()=>{
    console.log("running on port 8080")
})