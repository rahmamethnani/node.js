const express=require("express");
const app=express();
const port = 5500;
const db=require("./db.js");
app.get("/", (req,res) => {
    res.send("bonjour");
} )

app.listen(port,() => {
    console.log ("adresse server http://localhost:5500")
})