const router=require("express").Router()
const matiere=require("../controler.js/Matierecontroler")
router.post('/',matiere.addMatiere)
module.exports=router