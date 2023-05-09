const mongoose=require("mongoose")
const UserModel=require("./UserModel")
const schemaprovider=new mongoose.Schema({
    company:{
        type:String,
        required:true
       }
})
const provider=UserModel.discriminator("provider",schemaprovider)
module.exports=mongoose.model("provider")