const router=require("express").Router()
const ordercontroler=require("../controler/orderControler")
router.post("/",ordercontroler.addOrder)
router.get('/or',ordercontroler.getAll)
router.put('/:id',ordercontroler.update)
router.delete('/:id',ordercontroler.delete)
router.get('/:id',ordercontroler.getById)
module.exports=router