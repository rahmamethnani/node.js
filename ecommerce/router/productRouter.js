const router=require("express").Router();
const uploedfile = require("../Middelware/uploedfile");
const catproduct=require("../controler/productControler")
router.post("/",uploedfile.array("photos"),catproduct.addProduct)
router.get("/",catproduct.getAll)
router.put("/:id" ,catproduct.update)
router.delete("/:id" ,catproduct.delete)
router.get("/:id" ,catproduct.getById)
module.exports=router