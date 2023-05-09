const mongoose=require("mongoose")
const SchemaSubCategory=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"categories"
    },
    product:[{
        type:mongoose.Types.ObjectId,
        ref:"products"
    }]
})
module.exports=mongoose.model("Subcategories",  SchemaSubCategory )