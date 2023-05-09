const categorie=require("../models/modelCategorie")
createCategorie =(req,res) => {
    const newCategorie={
        name:req.body.name,
        descrption:req.body.descrption,
        
    }
    categorie.create(newCategorie, err =>{
        if(err)return err;
        else{
            return res.status(200).json({
                message:"success User",

            })

        }

    })
    

}
getAll= async (req,res)=>{
    const categories= await categorie.find()
    res.status(200).json({
        message:'list of categories',
        data:categories
    })
}

updatecategorie = async (req,res)=>{
    await categorie.updateOne({
        _id:req.params.id }, req.body)

        res.status(200).json({
            message:'sucessed'
        })
}

deletecategorie = async(req,res)=>{
    await categorie.deleteOne({
        _id:req.params.id} )

        res.status(200).json({
            message:"sucessed"
        })
}



module.exports={createCategorie , getAll , updatecategorie , deletecategorie};

