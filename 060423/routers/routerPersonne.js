const router=require("express").Router()
const controlerPersonne=require("../controler/controlerPersonne")
router.post('/', controlerPersonne.createPersonne )
module.exports=router