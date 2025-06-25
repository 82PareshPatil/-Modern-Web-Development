const express = require("express");
const path = require("path");

const app= express();
let port =3005;
app.listen(port , ()=>{
console.log("Server Started...");
})

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res)=>{
    res.send("this is root page, go to the dashboard page");
});
app.get("/dashboard", (req,res)=>{
    res.render("dashboard.ejs");
});
app.get("/rendom",(req,res)=>{
   let num=Math.floor(Math.random()*6)+1;
    res.render("dice.ejs",{num});
})
app.get("/ig/:username",(req,res)=>{
    let f = ["Paresh", "Mahesh", "sumit", "Kalpesh"]
    let { username } = req.params;
    res.render("instagram.ejs",{username , f});
})