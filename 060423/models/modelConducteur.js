const mongoose=require("mongoose")
const schemaConducteur=new mongoose.Schema({
    TypePermis:{
        type:String
    },
    DatePermis:{
        type:String
    }
})
module.exports=mongoose.model('conducteur', schemaConducteur)