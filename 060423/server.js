const express=require("express");
const app=express()
const db=require("./db")
const port=5001
app.use(express.json())
const routerVoiture=require('./routers/routerVoiture')
app.use("/posts" , routerVoiture)
const routerConducteur=require('./routers/routerConducteur')
app.use("/cond", routerConducteur)
const routerPersonne=require('./routers/routerPersonne')
app.use("/posts",routerPersonne)
app.listen(port,() => {
    console.log ("adresse server http://localhost:5001")
})