const router=require("express").Router();
const controlerUser=require("./contolerUser");
router.post('/create', controlerUser.creatUser);

module.exports=router;
