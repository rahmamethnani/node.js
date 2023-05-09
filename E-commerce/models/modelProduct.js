const mongoose=require("mongoose");
const schemaProduct=new mongoose.Schema({
    name:{
        type:String
    },
    ref:{
        type:Number
    },
    quantity:{
        type:Number
    },
    price:{
        type:Number
    }
})
module.exports=mongoose.model('Product' , schemaProduct)