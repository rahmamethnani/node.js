const router=require("express").Router()
const providercontroler=require("../controler/providecontroler")
router.post('/prov',providercontroler.registre)
router.get('/',providercontroler.getAll)
router.put('/:id',providercontroler.update)
router.delete('/:id',providercontroler.delete)
router.get('/:id',providercontroler.getById)
module.exports=router