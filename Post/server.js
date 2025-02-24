//if u want to change state of server, then it should be a post request
//data is not visible in url in post req
//post req can be send by using form and by 

//by default data sent by form, its content type is urlencoded
//content type-> 1. json 2. urlencoded   then these two converted to object
//express.urlencoded middleware/fn used to urlencoded data parse to object 
const express=require("express");
const app = express();
app.use(express.urlencoded({extended:true}))
let userData= [];

app.get("/adduser" , (req,res)=>{
    res.sendFile(__dirname + "/register.html");
})
app.post("/adduser",(req,res)=>{
    let {username,useremail,userpassword} = req.body;
    console.log(username,useremail,userpassword);
    let newUser = {
        name:username,
        email:useremail,
        password:userpassword
    }
    userData.push(newUser);
    res.send(userData);
})

app.listen(4545,()=>{
    console.log("server started");
})

