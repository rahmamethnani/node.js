const Prof=require("./modelProff");
creatProf=(req , res)=>{
    const newUser={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        numero:req.body.age,
    }
    Prof.create(newUser, err =>{
        if(err)return err;
        else{
            return res.status(200).json({
                message:"connected",

            })

        }

    })

}
module.exports={creatProf};
