const express=require("express");
const app = express();
const db =require("./db");
const  port=4001
app.use(express.json())
const routerCategorie=require('./routers/routercategorie')
app.use("/categorie",routerCategorie);

const routerCategorieSub=require("./routers/routerCategorieSub")
app.use("/Sub" , routerCategorieSub);

const routerProduct=require('./routers/routerProduct')
app.use("/Prod", routerProduct);

app.listen(port,() => {
    console.log ("adresse server http://localhost:4001")
})