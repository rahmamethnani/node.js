const mongoose=require("mongoose")
const userModel=require('./UserModel')
const shemaadmin=new mongoose.Schema({

})
const admin=userModel.discriminator('admin' , shemaadmin);
module.exports=mongoose.model('admin')