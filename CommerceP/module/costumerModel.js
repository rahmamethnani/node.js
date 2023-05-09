const mongoose=require("mongoose")
const UserModel=require("./UserModel")
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
const costumer=UserModel.discriminator('costumers',schemacostumer)
module.exports=mongoose.model("costumers")

