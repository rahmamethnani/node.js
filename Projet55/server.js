const express=require("express")
const app=express()
const db=require("./db")
const port=3001
const routerProf=require("./Profrouter")
app.use(express.json())
const routerEtudiant=require("./router")
app.use("/etudiant",routerEtudiant)


app.use("/prof",routerProf)
app.listen(port,()=>{
    console.log("Welcome")
})

