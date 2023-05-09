const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/ecommerceP",(err)=>{
    if(!err){
        console.log("Mongodb connection")
    }else {
        console.log("error connecting to Mongo")
    }
})