const mongoose=require("mongoose")
const Subcat=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    }
})
module.exports=mongoose.model("Subcat" ,Subcat)