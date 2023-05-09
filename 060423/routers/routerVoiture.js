const router=require("express").Router()
const contolerVoiture=require("../controler/contolerVoiture")
router.post('/', contolerVoiture.createVoiture)
router.get('/post', contolerVoiture.getAll)
router.put("/update/:id" , contolerVoiture.updateVoiture)
router.delete("/delete/:id" ,contolerVoiture.deletevoiture)

module.exports=router