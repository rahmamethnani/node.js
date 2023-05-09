    const Product=require("./moduleProduct")
    createProduct=(req,res)=>{
        const newProduct={
            name:req.body.name,
            reference:req.body.reference,
            quantite:req.body.quantite,
            prix: req.body.prix

        }
        Product.create(newProduct,err => {
            if(err)return err;
            else{
                return res.status(200).json({
                    message:("sucessed"),
                })
            }
        })
    }
    module.exports={createProduct}