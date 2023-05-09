const multer=require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"./storage")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  const fileFilter=(req,file,cb)=>{
    if (
        file.mimetype=="image/png" || 
        file.mimetype=="image/jpg" ||
        file.mimetype=="image/jpeg"
    )
    {cb(null,true)}
    else{
        cb(new Error("error failed 404",false))
    }
  }
  module.exports
=multer({storage:storage,fileFilter:fileFilter})