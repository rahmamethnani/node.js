const router=require("express").Router()
const providercontroler=require('../controler/providercontroler')
router.post('/',providercontroler.registre)
router.get('/prov' ,providercontroler.getAll)
router.put('/:id' , providercontroler.update)
router.delete('/:id',providercontroler.delete)
router.get('/:id',providercontroler.getById)

module.exports=router