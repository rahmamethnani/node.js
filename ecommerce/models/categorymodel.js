const mongoose=require("mongoose")
const schemaCategory=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    Subcategorys:[{
        type:mongoose.Types.ObjectId,
        ref:"Subcategories"
    }]
})
module.exports=mongoose.model("categories", schemaCategory)