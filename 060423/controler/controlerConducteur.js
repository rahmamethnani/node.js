const Conducteur=require("../models/modelConducteur")
createaccount=(req,res)=>{
    const Conducteur={
        TypePermis:req.body.TypePermis,
        DatePermis:req.body.DatePermis,
    }
}
    Conducteur.create(Conducteur, err =>{
    if(err)return err;
    else{
        return res.status(200).json({
            message:"success User",

        })
    }

})

    getAll=async(req,res)=>{
    const conducteur =await Conducteur.find()
    res.status(200).json({
        messages:"list of conducteur",
        date:conducteur,
    })

}

updatecConducteur=async(req, res)=>{
    await Conducteur.updateOne({
        _id:req.params.id
    }, req.body)

    res.status(200).json({
        message:"sucessed"
    })
}


   

module.exports={createaccount , getAll , updatecConducteur};