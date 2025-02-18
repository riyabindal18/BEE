//url pe koi info send krni ho server ke pass to isliye queryparameter use krte h
//params :- client(http:localhost:4000\getuserbyId\5)    server(\getuserbyId\:id)
const express = require("express");
const app = express();
// app.get("/profile",(req,res)=>{
//     const {username} = req.query;     //localhost:5678/profile?username=Riya(key=value)
//     //find in db
//     res.send("profile page of "+" "+username)
// })



app.get("/profile",(req,res)=>{
    const {username,lastname,address} = req.query;     //localhost:5678/profile?username=Riya&lastname=gupta&address=cdf(key=value)
     //find in db
    res.send("profile page of "+" "+username+" "+lastname+" "+address);
})

let usersData = [
    {
        id:1,
        name:"hhuj",
        address:"xyz"
    },
    {
        id:2,
        name:"abc",
        address:"xksnx"
    },
    {
        id:3,
        name:"hbvh",
        address:"jhi"
    }
]
app.get("/allusers",(req,res)=>{
    res.send(usersData)
})
app.get("/getuserbyId",(req,res)=>{
     let {id} = req.query;
     for(let i=0;i<usersData.length;i++){
        if(usersData[i].id==id){
            return res.send(usersData[i])
        }
     }
     res.send("User not found")
})


//route to delete userid
app.get("/deleteuserbyId",(req,res)=>{
    let {id} = req.query;
    for(let i=0;i<usersData.length;i++){
        if(usersData[i].id==id){
            usersData.splice(i,1);
            return res.send("user deleted")
        }
    }
    res.send("No user found to delete")
})


//route to add a new userid
app.get("/adduser",(req,res)=>{
    let {id,name,address} = req.query;
    let newUser = {
        id:id,
        name:name,
        address:address
    }
    usersData.push(newUser);
    res.send("user  added")
})

app.listen(5678, ()=>{
    console.log("server started");
})

