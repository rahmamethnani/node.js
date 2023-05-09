const Student=require("./mUser");
creatStudent=(req , res)=>{
    const newUser={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        age:req.body.age,
    }
    Student.create(newUser, err =>{
        if(err)return err;
        else{
            return res.status(200).json({
                message:"success User",

            })

        }

    })

}
module.exports={creatStudent};
