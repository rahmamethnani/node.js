const mongoose=require("mongoose")
const schemaEtudient=new mongoose.Schema({
     adress:{
        type:String,
        required: true,
     },
     cin:{
        type:String,
        required: true,
     },
     picture:{
        type:String,
        required: true,
     }
})
module.exports=mongoose.model('etudient',schemaEtudient)