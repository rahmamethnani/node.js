const mongoose=require("mongoose")
const userModel=require('./UsersModel')
const schemaprovider=new mongoose.Schema({
   company:{
    type:String,
    required:true
   }
})
const provider=userModel.discriminator('providers',schemaprovider)
module.exports=mongoose.model('providers')