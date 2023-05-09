const express=require("express");
const app=express();
const port = 3000;
const db=require("./db.js");
app.get("/", (req,res) => {
    res.send("PISTASHA");
} )

app.listen(port,() => {
    console.log ("adresse server http://localhost:3000")
})