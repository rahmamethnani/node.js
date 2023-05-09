const EtudientModel=require("../modules.js/etudientModel")
module.exports = {
    addEtudient:async(res,req)=>{
        const etudient=new EtudientModel(req.body)
        await etudient.save(req.body , (err , item)=>{
            if(err){
                res.status(400).json({
                    sucess:false,
                    message:"failed",
                    err
                }) 
            }
            else{
                res.status(201).json({
                    sucess:true,
                    message:"sucess",
                    data:item
                })
            }
        })
}}

    


        