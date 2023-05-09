const mongoose=require("mongoose")
const schemaUser=new mongoose.Schema({
    name:{
        type:String
    },
    discription:{
        type:String
    }
})
module.exports=mongoose.modele('sub categorie' , schemaUser)