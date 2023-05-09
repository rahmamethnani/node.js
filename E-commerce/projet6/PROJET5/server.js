const express=require("express");
const app=express();
const port = 4321;
const db=require("./db.js");
const routerUser=require("./router");
app.use(express.json());
app.use("/Users",routerUser);
app.get("/", (req,res) => {
    res.send("bonjour");
} )

app.listen(port,() => {
    console.log ("adresse server http://localhost:4321")
})

