const mongoose=require("mongoose")
const schemaorder=new mongoose.Schema({
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model("order",schemaorder)