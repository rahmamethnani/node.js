const router=require("express").Router()
const Product=require("../controllers/controlerProduct")
router.post('/' , Product.addProd)
router.get('/', Product.getAll)
router.put("/update/:id" , Product.updateProduct)
router.delete("/update/:id" , Product.deleteProduct)

module.exports=router