const router=require("express").Router()
const costumercontroler=require("../controler/costumercontroler")
const uploedfile=require("../Middelware/uploedfile")
router.post('/',uploedfile.single("picture"),costumercontroler.registre)
router.get('/costu',costumercontroler.getAll)
router.put('/:id',costumercontroler.update)
router.delete('/:id',costumercontroler.delete)
router.get('/:id',costumercontroler.getById)



module.exports=router
