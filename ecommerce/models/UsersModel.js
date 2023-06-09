const mongoose=require("mongoose")
const baseOption={
    descriminatorKey:"itemtype",
    collection:"users",
}
const schemaUser=new mongoose.Schema({
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
module.exports=mongoose.model('users',schemaUser)