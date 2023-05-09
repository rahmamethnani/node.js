const mongoose=require("mongoose")
const schemaSubcategory=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Subcategory',schemaSubcategory)