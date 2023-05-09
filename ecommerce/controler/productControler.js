const productModel=require("../models/productModel")
module.exports={
   addProduct:async(req,res)=>{
    req.body["Gallery"]=req.files?.length<=0//condition?vrai:faux
    
    ?[]
    :req.files?.map((file)=>{
        return{
            name:file.filename,
            description:"description of gallery"
        }
    })

    
    const Product=new productModel(req.body)
    await Product.save(req.body,(err,item)=>{
        if (err){
            res.status(400).json({
                success:false,
                message:"failed",
                err
            })
        }
        else{
            res.status(201).json({
                success:true,
                message:"success",
                data:item
            })
        }
    })
},
getAll:async(req,res)=>{
    await productModel.find().exec((err,item)=>{
        if(err){
            res.status(400).json({
                success:false,
                message:"false",
                err
            })
        }
        else{
            res.status(200).json({
                success:true,
                message:"true",
                data:item
            })
        }
    })
},
update:(req,res)=>{
    productModel.findByIdAndUpdate(req.params.id , req.body).exec((err,item)=>{
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
    productModel.findByIdAndDelete(req.params.body).exec((err,item)=>{
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
    productModel.findById(req.params.id).exec((err,item)=>{
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
