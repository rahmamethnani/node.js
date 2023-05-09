const mongoose=require("mongoose")
const userModel=require('./UsersModel')
const shemaadmin=new mongoose.Schema({

})
const admin=userModel.discriminator('admin' , shemaadmin);
module.exports=mongoose.model('admin')