const mongoose=require("mongoose")
const schemaOrder=new mongoose.Schema({
    quantity:{
        type:String
    },
    price:{
        type:String
    },
    product:[{
       type:mongoose.Types.ObjectId,
       red:"products"
    }]
})
module.exports=mongoose.model('order' ,schemaOrder)