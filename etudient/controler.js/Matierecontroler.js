const matiereModel=require("../modules.js/matiereModel")
module.exports={
    addMatiere:async(res,req)=>{
        req.body["matiere"]=req.files?.length<=0
        ?[]
        :req.files?.map((file)=>{
            return{
                name:file.filename,
                description:" matiere ",

            }
        })

        const matiere=new matiereModel(req.body)
        await matiere.save(req.body,(err,item)=>{
            if(err){
                res.status(400).json({
                    sucess:false,
                    message:"false",
                    err
                })
            }
            else{
                res.status(201).json({
                    sucess:true,
                    message:"true",
                    data:item
                })
            }
        })
    }
        
    
}