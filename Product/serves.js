const express=require("express");
const app=express();
const db=require("./db")
const port=4800;
app.use(express.json())
const routerProduct=require('./routers')
app.use("/Product", routerProduct)
app.listen(port,() => {
    console.log("adresse server http://localhost:4800")
})
