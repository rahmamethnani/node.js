const router=require("express").Router()
const costumercontroler=require("../controler/CostumerControler")
router.post('/',costumercontroler.registre)
router.get('/cos',costumercontroler.getAll)
router.put('/:id',costumercontroler.update)
router.delete('/:id',costumercontroler.delete)
router.get('/:id',costumercontroler.getById)
module.exports=router