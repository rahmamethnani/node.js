const router=require("express").Router
const controlerSub=require("./controlerSub")
router.post('./creat', controlerSub , creatSub)
module.exports=router