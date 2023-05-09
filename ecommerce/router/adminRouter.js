const router=require("express").Router()
const admincontroler=require("../controler/admincontroler")
router.post('/',admincontroler.registre)
router.get('/adm',admincontroler.getAll)
router.put('/:id',admincontroler.update)
router.delete('/:id',admincontroler.delete)
router.get('/:id',admincontroler.getById)


module.exports=router
