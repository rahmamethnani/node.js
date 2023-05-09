const mongoose=require("mongoose")
const schemaproduct=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    ref: {
        type: String,
        required: true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    gallery:{
        type:String,
        required:true
    }
   
    
})
module.exports=mongoose.model("products",schemaproduct)

    
