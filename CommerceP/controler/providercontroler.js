const providerModel=require("../module/providerModel")
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
        const hashPassword=await bcrypt.hashSync(req.body.password, parseInt(salt))
        const provider=new providerModel({
           ...req.body,
            password:hashPassword
           
        })
            await provider.save(req.body,(err, item)=>{
                if(err){
                    res.status(400).json({
                        sucess:false,
                        message:"false",
                        err

                    })
                }else{
                     transport.sendMail({
                        from:"<provider@gmail.com>",
                        to: item.email,
                        subject:"email confirmation" + item.name,
                        text:"Hallo"
                     })


                    res.status(201).json({
                        sucess:true,
                        message:"true",
                        data:item

                    })
                }
            })
    }}