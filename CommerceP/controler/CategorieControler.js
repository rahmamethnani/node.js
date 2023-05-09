const categoryModel = require("../Model/categoryModel")
module.exports = {
    addcategorie: async (req, res) => {
        const category = new categoryModel(req.body)
        await category.save(req.body, (err, item) => {
            if (err) {
                res.status(400).json({
                    sucess: false,
                    message: "false",
                    err
                })
            } else {
                res.status(201).json({
                    sucess: true,
                    message: "true",
                    data: item
                })
            }
        })
    },
    getall: async (req, res) => {
        await categoryModel.find().exec((err, item) => {
            if (err) {
                res.status(400).json({
                    sucess: false,
                    message: "false",
                    err
                })
            } else {
                res.status(201).json({
                    sucess: true,
                    message: "true",
                    dat: item
                })
            }
        })
    },
    update: async (req, res) => {
        categoryModel.findByIdAndUpdate(req.params.id,req.body).exec((err, item) => {
            if (err) {
                res.status(400).json({
                    sucess: false,
                    message: "false",
                    err
                })
            }
            else {
                res.status(200).json({
                    sucess: true,
                    message: "true",
                    data: item
                })
            }
        }
        )
    },
    delete:async(req,res)=>{
         categoryModel.findByIdAndDelete(req.params.id).exec((err,item)=>{
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
    getById:async(req,res)=>{
        categoryModel.findById(req.params.id).exec((err,item)=>{
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