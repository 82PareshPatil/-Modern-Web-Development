let express = require("express");
let app=express();
let port = 3004;
try{
 
app.listen(port, ()=>{
    console.log("Server started...");
 })
//  app.use((req,res)=>{
//     console.log("Request recieved");
//     res.send("this is basic responce");
 // next();  Always call next() to continue to next middleware/route
 // });

 

app.get("/dashboard",(req,res)=>{
    res.send("this is dashboard");
   
})


app.get("/",(req,res)=>{
    res.send("this is root page");
})
app.get("/search", (req,res)=>{
    let {q}=req.query;
    res.send(`The query for: ${q}`)
})

// path parameter
app.get("/:username", (req,res)=>{
    let username= req.params.username;
    let code=`<h1>Hi, ${username} this is not a real page</h1>`;
    res.send(code);
})

app.use((req, res) => {
  res.status(404).send(`<h1>Sorry page not found. go to <a link href='http://localhost:3004/dashboard'>Dashboard</a></h1>`);
});


}
catch(e)
{
    console.log(e);
}