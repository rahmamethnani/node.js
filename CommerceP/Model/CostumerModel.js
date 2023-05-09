const mongoose=require("mongoose")
const UserModel=require("./UserModel")
const schemaCostumer=new mongoose.Schema({
    adress:{
        type:String,
        
    },
    cin:{
        type:String,
       
    },
    picture:{
        type:String,
        
    }
})
const costumer=UserModel.discriminator("costumer",schemaCostumer);
module.exports=mongoose.model("costumer")