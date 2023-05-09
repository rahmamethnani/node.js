const OrderModel=require("../models/OrderModel")
module.exports={
     addOrder:async(req,res)=>{
        const Order=new OrderModel(req.body)
        await Order.save(req.body,(err,item)=>{
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
    getAll: async (req, res) => {
        await  OrderModel.find().exec((err, item) => {
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
        OrderModel.findByIdAndUpdate(req.params.id , req.body).exec((err,item)=>{
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
        OrderModel.findByIdAndDelete(req.params.body).exec((err,item)=>{
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
        OrderModel.findById(req.params.id).exec((err,item)=>{
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