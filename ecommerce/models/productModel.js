const mongoose=require("mongoose")
const Galleryschema=mongoose.Schema({
    name:{type:String
    },
    description:{
        type:String
    },

})
const schemaProduct=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    ref: {
        type: String,
        required: true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    Gallery:[
        Galleryschema
    ]
    
})
module.exports=mongoose.model("products", schemaProduct)