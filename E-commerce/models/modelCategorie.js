const mongoose=require("mongoose")
const schemaCategorie=new mongoose.Schema({
    name:{
        type:String
    },
    descrption:{
        type:String
    }

})
module.exports=mongoose.model('categorie' , schemaCategorie)