const router=require("express").Router();
const catCategory=require("../controler/categorycontroler")
router.post("/",catCategory.addCategory)
router.get('/',catCategory.getAll)
router.put('/:id',catCategory.update)
router.delete('/:id' , catCategory.delete)
router.get('/:id' , catCategory.getById)


module.exports=router