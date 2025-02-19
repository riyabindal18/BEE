//if u want to change state of server, then it should be a post request
//data is not visible in url in post req
//post req can be send by using form and by 
const express=require("express");
const app = express();

app.get("/adduser" , (req,res)=>{
    res.sendFile(__dirname + "/register.html");
})

app.listen(4545,()=>{
    console.log("server started");
})

