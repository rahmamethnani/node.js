const router=require("express").Router()
const controlerProduct=require("./controlerProduct")
router.post('create' , controlerProduct.createProduct)
module.exports=router