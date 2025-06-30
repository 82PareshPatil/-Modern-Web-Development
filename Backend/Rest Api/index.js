let express = require("express");
let app= express();
let port = 3005;
let path = require("path")

app.use(express.urlencoded({extended:true}))

app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send("index.js");
})

app.listen(port,()=>{
    console.log("server started...");
})