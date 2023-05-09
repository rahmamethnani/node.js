const express=require("express")
const db=require("./db")
const app=express()
const port=7500
app.use(express.json())

const EtudientRouter=require("./router.js/EtudientRouter")
app.use('etudient',EtudientRouter)

app.listen(port,()=>{
    console.log("success")})