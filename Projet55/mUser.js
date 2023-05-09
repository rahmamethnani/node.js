
const mongoose=require("mongoose");
const schemaUser=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
      type:String
    },
    age:{
        type: Number
    }
})
module.exports=mongoose.model('Student', schemaUser );
