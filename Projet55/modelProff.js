const mongoose=require("mongoose");
const schemaProf=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password :{
        type:String
    },
    numero:{
        type: Number
    }
})
module.exports=mongoose.model('Prof', schemaProf );
