var express=require("express");

var app=express();
app.use(express.static('style'));

app.get("/",function(req,res){
    res.render("home.ejs");
})

app.listen(process.env.PORT,process.env.IP);
