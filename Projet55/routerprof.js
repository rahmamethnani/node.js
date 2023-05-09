const router=require("express").Router();
const controlerProf=require("./controlerprof");
router.post('/create', controlerProf.creatProf);
module.exports=router;