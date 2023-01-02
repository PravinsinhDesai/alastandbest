const express=require('express')

app=express()

const path=require('path');
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    app.sendfile("public/login.html",{root:__dirname})

})


app.listen(3000);
