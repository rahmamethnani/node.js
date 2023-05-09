const mongoose=require("mongoose");
const schemaUser=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type: Number
    }
})
module.exports=mongoose.model('User', schemaUser );
