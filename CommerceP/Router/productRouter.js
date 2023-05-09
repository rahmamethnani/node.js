const router=require("express").Router()
const productcontroler=require("../controler/productControler")
router.post('/',productcontroler.addProduct)
router.get('/pro',productcontroler.getAll)
router.put('/:id',productcontroler.update)
router.delete('/:id',productcontroler.delete)
router.get('/:id',productcontroler.getById)
module.exports=router