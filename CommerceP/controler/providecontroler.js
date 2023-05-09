const providerModel=require("../Model/providerModel")
const nodemailer=require("nodemailer")
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3ee284c16f0e7e",
      pass: "f9caba43bffb2d"
    }
  });
  const bcrypt=require("bcrypt")
  module.exports={
    registre:async(req,res)=>{
        const salt=bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hashSync(req.body.password,parseInt(salt))
        /* console.log(hashPassword) */
        const provider=new providerModel({
            ...req.body,
            password:hashPassword
        })
        await provider.save(req.body,( err,item)=>{
            if(err){
                res.status(400).json({
                    sucess:false,
                    message:"false",
                    err
                })
            }else{
                transport.sendMail({
                    from:"<provider@gmail.com",
                    to:item.email,
                    subject:"email confirmation"+item.name,
                    text:"welcome",
                })
                res.status(201).json({
                    sucess:true,
                    message:"true",
                    data:item
                })
            }
        })
    },
    getAll:async(req,res)=>{
        await providerModel.find().exec((err,item)=>{
            if(err){
                res.status(400).json({
                    sucess:false,
                    message:"false",
                    err
                })
            }else{
                res.status(200).json({
                    sucess:true,
                    message:"true",
                    data:item
                })
            }
        })
    },
    update:async(req,res)=>{
        providerModel.findByIdAndUpdate(req.params.id,req.body).exec((err,item)=>{
            if(err){
                res.status(400).json({
                    sucess:false,
                    message:"false",err
                })
            }else{
                res.status(201).json({
                    sucess:true,
                    message:"true",
                    data:item
                })
            }
        })
    },
    delete:async(req,res)=>{
        providerModel.findByIdAndDelete(req.params.id).exec((err,item)=>{
            if(err){
                res.status(400).json({
                    sucess:false,
                    message:"false",err
                })
            }else{
                res.status(201).json({
                    sucess:true,
                    message:"delete",
                    
                })
            }
        })
    },
    getById:async(req,res)=>{
        providerModel.findById(req.params.id).exec((err,item)=>{
            if(err){
                res.status(400).json({
                    sucess:false,
                    message:"false",err
                })
            }else{
                res.status(201).json({
                    sucess:true,
                    message:"true",
                    data:item
                })
            }
        })
    }
  }

  
