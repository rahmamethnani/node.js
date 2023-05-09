const router=require("express").Router()
const Auth=require("../controler/AuthentificationControler")
router.post("/login",Auth.login);
router.post("/logout" , Auth.logout);
module.exports=router