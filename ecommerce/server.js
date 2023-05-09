require("dotenv").config()
const express=require("express")
const db=require("./db")
const app=express()
const port=3000
app.use(express.json())
app.get("/getimage/:img",(req,res)=>{
    res.sendFile(__dirname+"/storage/"+req.params.img)
})
const categoryRouter=require("./router/cotegoryRouter")
app.use("/categorie",categoryRouter)

const productRouter=require("./router/productRouter")
app.use("/product",productRouter)

const OrderRouter=require("./router/OrderRouter")
app.use("/order",OrderRouter)

const SubCategoryRouter=require("./router/categorySubRouter")
app.use("/subcategorie" ,SubCategoryRouter)

const providerRouter=require("./router/providerRouter")
app.use("/provider",providerRouter)

const costumerRouter=require("./router/costumerRouter")
app.use("/costumer",costumerRouter)

const adminRouter=require("./router/adminRouter")
app.use("/admin",adminRouter)

const AuthRouter=require("./router/AuthRouter")
app.use("/auth",AuthRouter)


app.listen(port,()=>{
    console.log("success")
})







