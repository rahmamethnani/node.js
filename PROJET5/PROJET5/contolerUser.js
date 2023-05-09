const User=require("./mUser");
creatUser=(req , res)=>{
    const newUser={
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
    }
    User.create(newUser, err =>{
        if(err)return err;
        else{
            return res.status(200).json({
                message:"success User",

            })

        }

    })

}
module.exports={creatUser};