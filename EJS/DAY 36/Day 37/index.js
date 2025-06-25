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
    
     let {username}=req.params;
     let instadata = require("./data.json");
      const data = instadata[username];
      if(data)
      {
        res.render("instagram.ejs", {data});
      }
      else{
        res.render("Error.ejs");
      }

})