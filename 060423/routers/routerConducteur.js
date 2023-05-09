const router=require("express").Router()
const controlerConducteur=require("../controler/controlerConducteur")
router.post('/', controlerConducteur.createaccount)
router.get('/',controlerConducteur.getAll)
router.put("/update/:id",controlerConducteur.updatecConducteur)
module.exports=router