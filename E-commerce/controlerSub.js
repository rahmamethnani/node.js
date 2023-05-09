const sub=require('./moduleSub')
creatSub=(req , res) =>{
    const newUser={
        name: req.body.name,
        discription:req.body.discription,
    }
}
creat.Sub(newUser, err =>{
      if(err) return err;
      else{
        return res.status(200).json({
            message:"success User",

        })

    }
}
)
module.exports={creatSub};