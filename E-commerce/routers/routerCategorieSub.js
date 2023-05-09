const router=require("express").Router()
const SubCat=require("../controllers/controlerSubcategory")
router.post("/create" ,SubCat.addSubCat)
router.get("/", SubCat.getAll)
router.put("/update/:id" , SubCat.updateSubCat)
router.delete("/update/:id" , SubCat.deleteSubCat)

module.exports=router