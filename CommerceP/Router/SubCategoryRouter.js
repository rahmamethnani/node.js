const router=require("express").Router()
const subcategorycontroler=require("../controler/SubcategryControler")
router.post('/',subcategorycontroler.addSubcategory)
router.get('/sub',subcategorycontroler.getAll)
router.put('/:id',subcategorycontroler.update)
router.delete('/:id',subcategorycontroler.delete)
router.get('/:id',subcategorycontroler.getById)
module.exports=router