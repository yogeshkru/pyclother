const customError=require('./customError')

module.exports=(err,req,res,next)=>{
  err.statuscode=err.statuscode || 500
  err.message=err.message || "Internal server error"

  //Wrong mangodb id error
  if(err.name=== "CastError"){
    const message=`Resources not found with this id.. Invalid ${err.path}`
    err=new customError(message,400)
  }

  // Duplicate key error
  if(err.code === 11000){
    const message=`Dulipcate key ${Object.keys(err.keyValue)} Entered`
    err=new customError(message,400)
  }


  //wrong jwt error
  if(err.name === "JsonwebTokenError"){
    const message=`your url is invalid please try again later`
    err=new customError(message,400)
  }


  res.status(err.statuscode).json({success:false,message:err.message})
};

