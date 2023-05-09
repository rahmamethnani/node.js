const mongoose=require("mongoose")
const schemaVoiture= new mongoose.Schema({
    NbPortes:{
        type:String        
    },                          
    Puissance:{                  
        type:String                                     
    },
    Kilométrage:{
        type:String
    },
    Marque:{
        type:String
    },
    Type:{
        type:String
    },
    Rouler:{
        type:String
    }
})
module.exports=mongoose.model('Voiture' , schemaVoiture)


