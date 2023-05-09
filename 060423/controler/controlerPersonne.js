const Personne=require("../models/modelPersonne")
createPersonne=(req,res)=>{
    const newPersonne={
        Prénom:req.body.Prénom,
        DateNaissace:req.body.DateNaissace,
        Nom:req.body.Nom,
        Age:req.body.Age,
    }
}
Personne.create(Personne, err =>{
    if(err)return err;
    else{
        return res.status(200).json({
            message:"success User",

        })
    }

})
module.exports={createPersonne}