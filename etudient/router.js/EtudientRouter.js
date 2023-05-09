const router=require("express").Router()
const etudient=require("../controler.js/Etudientcontroler")
router.post("/",etudient.addEtudient)
module.exports=router