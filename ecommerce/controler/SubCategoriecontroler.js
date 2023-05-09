const SubcatModel = require("../models/categorySubModel")
module.exports = {
    addSubCategory: async (req, res) => {
        const Subcategory = new SubcatModel(req.body)
        await Subcategory.save(req.body, (err, item) => {

            if (err) {
                res.status(400).json({
                    success: false,
                    message: "failed",
                    err
                })
            }
            else {
                res.status(201).json({
                    success: true,
                    message: "success",
                    data: item
                })
            }
        })

    },
    getAll: async (req, res) => {
        await  SubcatModel.find().exec((err, item) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: "failed",
                    err
                })
            }
            else {
                res.status(201).json({
                    success: true,
                    message: "success",
                    data: item
                })
            }
        })
    
    },
    update:(req,res)=>{
        SubcatModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).exec((err,item)=>{
            if(err){
                res.status(400).json({
                    sucess:false,
                    message:"false",
                    err
                })
        
        }
            else{
                res.status(200).json({
                    sucess:true,
                    message:"true",
                    data:item
                })
        }
        })
    },

    delete:(req,res)=>{
        SubcatModel.findByIdAndDelete(req.params.id).exec((err,item)=>{
            if(err){
                res.status(400).json({
                    sucess:false,
                    message:"false",
                    err
                })
            }else{
                res.status(200).json({
                    sucess:true,
                    message:"delete",
                    
                })
            }
        })
    },

 getById:(req,res)=>{
    SubcatModel.findById(req.params.id).exec((err,item)=>{
        if(err){
            res.status(400).json({
                sucess:false,
                message:"false",
                err
            })
        }else{
            res.status(200).json({
                sucess:true,
                message:"true",
                data:item
            })
        }
    })
 }
    
}



