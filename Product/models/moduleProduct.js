const mongoose=require("mongoose");
const schemaProduct=new mongoose.schema({
    name:{
        type:String
    },
    reference:{
        type:Number
    },
    quantity:{
        type:Number
    },
    prix:{
        type:Number
    }
})
module.exports=mongoose.model('Product' , schemaProduct)