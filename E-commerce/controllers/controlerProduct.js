const Product=require("../models/modelProduct");
addProd=(req,res)=>{
    const newproduct={
    name:req.body.name,
    ref:req.body.ref,
    quantity:req.body.quantity,
    price:req.body.price,
    }
    Product.create(newproduct,err=>{
        if(err) return err;
        else{
            return res.status(200).json({
                Message:("success")
            })
        }
    })
}
getAll=async(req,res)=>{
    const Products=await Product.find()
    res.status(200).json({
        Message:"liste of message",
        data: Products
      })
}

updateProduct = async (req,res)=>{
    await Product.updateOne({
        _id:req.params.id }, req.body)

        res.status(200).json({
            message:'sucessed'
        })
}

deleteProduct=async(req,res)=>{
    await Product.deleteOne({
        _id:req.params.id
    })
    res.status(200).json({
        message:'sucessed'
    })
}

module.exports={addProd , getAll , updateProduct , deleteProduct}