const mongoose=require("mongoose")
const UserModel=require("./UserModel")
const schemaadmin=new mongoose.Schema({

})
const admin=UserModel.discriminator("admin",schemaadmin)
module.exports=mongoose.model("admin")