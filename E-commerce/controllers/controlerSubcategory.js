const subcategory=require("../models/moduleCategorieSub")
addSubCat=(req,res)=>{
    const newSub={
        name:req.body.name,
        description:req.body.description,
    }
    subcategory.create(newSub,err=>{
        if(err) return err;
        else{
            return res.status(200).json({
                Message:("success")
            })
        }
    })
}
getAll = async(req,res)=>{
      const categorie=await subcategory.find()
      res.status(200).json({
        Message:"liste of message",
        data: categorie
      })
}

updateSubCat = async (req,res)=>{
    await subcategory.updateOne({ _id:req.params.id }, req.body)
        res.status(200).json({
            message:'sucessed'
        })
}

deleteSubCat= async(req,res)=>{
    await subcategory.deleteOne({
        _id:req.params.id
    })
    res.status(200).json({
        message:'successed'
    })
}
module.exports={addSubCat , getAll , updateSubCat , deleteSubCat};