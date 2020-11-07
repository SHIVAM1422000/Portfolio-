var express=require("express");
var app=express();
app.use(express.static('style'));

app.get("/",function(req,res){
    res.render("home.ejs");
})

app.listen(process.env.port process.env.ip function(){
console.log("APP Started");
})

