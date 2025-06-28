let express = require("express");
let app = express();
let port = 3007;

app.use(express.urlencoded({extended : true}));
app.listen(port,(req,res)=>{
    console.log("server started..");
});
app.get("/register", (req,res)=>{
    let {user,password}=req.query;
    res.send(`hello welcome, ${user}`);
});
app.post("/register", (req,res)=>{
    let {user,password}=req.body;
    res.send(`hello welcome, ${user}`);
})