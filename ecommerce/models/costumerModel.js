const mongoose=require("mongoose")
const userModel=require('./UsersModel')
const schemacostumer=new mongoose.Schema({
    adresse:{
        type:String,
        required:true
    },
    cin:{
        type:String,
        required:true  
    },
    picture:{
        type:String,
        required:true
    }
})
const costumer=userModel.discriminator('costumers',schemacostumer);
module.exports=mongoose.model('costumers')