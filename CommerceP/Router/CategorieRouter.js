const router=require("express").Router()
const categorycontroler=require("../controler/CategorieControler")
router.post('/',categorycontroler.addcategorie)
router.get('/cat',categorycontroler.getall)
router.put('/:id',categorycontroler.update)
router.delete('/:id',categorycontroler.delete)
router.get('/:id',categorycontroler.getById)
module.exports=router