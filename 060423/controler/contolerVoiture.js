const Voiture=require("../models/modelVoiture");
createVoiture=(req,res) =>{
    const newVoiture={
        NbPortes:req.body.NbPortes,
        Puissance:req.body.Puissance,
        Kilométrage:req.body.Kilométrage,
        Marque:req.body.Marque,
        Type:req.body.Type,
        Rouler:req.body.Rouler,
    }

    Voiture.create(newVoiture, err =>{
        if(err)return err;
        else{
            return res.status(200).json({
                message:"success User",

            })
        }

    })
    

}

getAll=async(req,res)=>{
    const Voitures=await Voiture.find()
    res.status(200).json({
        message:"list of voitures",
        date:Voitures,
    })
}

updateVoiture=async(req,res)=>{
    await Voiture.updateOne({
        _id:req.params.id
    } , req.body)
    res.status(200).json({
        message:'successed'
    })
}

deletevoiture=async(req,res)=>{
    await Voiture.deleteOne({
        _id:req.params.id
    })
    res.status(200).json({
        message:"sucessed"
    })
    
}

module.exports={createVoiture , getAll , updateVoiture , deletevoiture};