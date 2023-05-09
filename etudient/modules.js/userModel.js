const mongoose=require("mongoose")
const baseOption={
    discriminatorKey:"itemtype",
    collection:"users",
}
const schemauser=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
}, baseOption)
module.exports=mongoose.model('users',schemauser)