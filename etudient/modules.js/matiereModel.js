const mongoose=require("mongoose")
const schemaMatiere=new mongoose.Schema({
    moyenne:{
        type:String
    },
    coef:{
        type:String
    }
})
module.exports=mongoose.model('matiere',schemaMatiere)