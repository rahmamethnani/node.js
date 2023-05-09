const UserModel=require("../Model/UserModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
let refreshToken=[]
const T_Token=process.env.T_SECRET
const R_TOKEN=process.env.R_SECRET
const generateacesstoken=(user)=>{
    return jwt.sign({id:user.id},T_Token,{expiresIn:"30m"})
}
const refreshacesstoken=(user)=>{
    return jwt.sign({id:user.id},R_TOKEN,{expiresIn:"1h"})
}
module.exports={
    login:async(res,req)=>{
        user=await UserModel.findOne({email:req.body.email})
        if(!err){
            res.status(400).json({
                sucess:false,
                message:"email or password invalid"
            })
        }
        else{
             validpassword=bcrypt.compareSync(req.body.password,user.password)
             if(!validpassword){
                res.status(200).json({
                    sucess:true,
                    message:"email or password invalid"
                })
             }
             else{
                const acesstoken=generateacesstoken(user)
                const refreshtoken=refreshacesstoken(user)
                refreshtokens.push(refreshtoken)

                res.status(201).json({
                    sucess:true,
                    message:"welcome",
                    data:user,
                    token:acesstoken,
                    refreshtoken:refreshToken
                })
             }
        }
    }
    
}
