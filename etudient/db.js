const mongoose=require("mongoose")
mongoose.connect=("mongodb://localhost:27017/etudient",(err)=>{
    if(!err){
         console.log("mongodb connection")
    }
    else{
        console.log("err connecting to mongo")
    }
})