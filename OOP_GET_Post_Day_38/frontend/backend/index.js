let express = require("express");
let app = express();
let port = 3006;

app.use(express.urlencoded({extended : true}));

app.listen(port, (req, res)=>{
   console.log("server started..."); 
});

app.get("/register",(req,res)=>{
   let {user , password} = req.query;
    res.send(`Welcome ${user}`);
});

app.post("/register",(req,res)=>{
   let {usern , passwordn} = req.body;
   console.log(req.body);
    res.send(`Welcome ${usern}`);
});
