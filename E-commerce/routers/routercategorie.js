const router=require("express").Router()
const categoriecontroler=require("../controllers/categoriecontroler.");
router.post('/create' , categoriecontroler.createCategorie);
router.get('/', categoriecontroler.getAll)
router.put("/update/:id" , categoriecontroler.updatecategorie)
router.delete("/update/:id",categoriecontroler .deletecategorie )
module.exports=router