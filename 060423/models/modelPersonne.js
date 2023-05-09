const mongoose=require("mongoose")
const schemaPersonne=new mongoose.Schema({
    Prénom:{
        type:String
    },
    DateNaissace:{
        type:String
    },
    Nom:{
        type:String
    },
    Age:{
        type:String
    }
})
module.exports=mongoose.model('Personne', schemaPersonne)