const router=require("express").Router();
const controlerUser=require("./controlerUser");
router.post('/create', controlerUser.creatStudent);
module.exports=router;
