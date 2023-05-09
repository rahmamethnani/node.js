const router=require("express").Router()
const SubcatCategory=require("../controler/SubCategoriecontroler")
router.post('/', SubcatCategory.addSubCategory)
router.get('/', SubcatCategory.getAll)
router.put('/:id',SubcatCategory.update)
router.delete('/:id' ,SubcatCategory.delete)
router.get('/:id',SubcatCategory.getById)
module.exports=router