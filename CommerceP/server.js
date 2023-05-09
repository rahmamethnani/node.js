const express=require("express")
const db=require("./db")
const app=express()
const port=5500
app.use(express.json())

const categoryRouter=require("./Router/CategorieRouter")
app.use('/category',categoryRouter)

const SubCategoryRouter=require("./Router/SubCategoryRouter")
app.use('subcategory',SubCategoryRouter)

const productRouter=require("./Router/productRouter")
app.use('/product',productRouter)

const OrderRouter=require('./Router/OrderRouter')
app.use('/order',OrderRouter)

const costumerRouter=require("./Router/costumerRouter")
app.use('/costumer',costumerRouter)

const providerRouter=require("./Router/providerRouter")
app.use('/provider',providerRouter)

const adminRouter=require("./Router/adminRouter")
app.use('/admin',adminRouter)

app.listen(port , ()=>{
    console.log("sucess")
})