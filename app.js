
const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("git external deploy to azure test")
})

app.get('/t',(req,res)=>{
    res.send("gitex test endpoint...")
})


app.listen(PORT, ()=>{console.log(`Started server....listening on port : ${PORT}`)})