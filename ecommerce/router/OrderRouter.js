const router=require("express").Router()
const catOrder=require("../controler/OrderControler")
router.post("/",catOrder.addOrder)
router.get("/",catOrder.getAll)
router.put("/:id",catOrder.update)
router.delete("/:id",catOrder.delete)
router.get("/:id",catOrder.getById)






module.exports=router
