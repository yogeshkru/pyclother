const bannerSchmea = require("../model/bannerModel");
const CustomError = require("../utils/customError");

class Banneres {
  createBannner = async (req, res, next) => {
    try {
      const { _id } = req.user;
     
      const files = req?.files;
 
  
      const bannnerUpload = Object.assign({}, req.body,{ShopId:_id});
      console.log(bannnerUpload)

      bannnerUpload.images = files.map((file) => `${file.filename}`);
      const newBanners = await bannerSchmea.create(bannnerUpload);

      res.status(201).json({ newBanners });
    } catch (err) {
      next(new CustomError(err.message, 500));
    }
  };

  getBanners = async (req, res, next) => {
    try {
      const bannergetAll = await bannerSchmea.find().populate("ShopId");
      if (!bannergetAll) {
        return res.status(404).json({
          status: 404,
          message: "gst not found",
        });
      }
      res.status(200).json({ bannergetAll });
    } catch (err) {
      next(new CustomError(err.message, 500));
    }
  };

  getShopBanners = async (req, res, next) => {
    try {
      const { _id } = req.user;
      const bannergetShopAll = await bannerSchmea.find({ ShopId: _id });
      res.status(200).json({ bannergetShopAll });
    } catch (err) {
      next(new CustomError(err.message, 500));
    }
  };


  AdminAccessPatch=async(req,res,next)=>{
    try{
        const UpdateBanner=await bannerSchmea.findByIdAndUpdate(req.params.id,req.body,{runValidator:true,new:true})
        res.status(200).json({ UpdateBanner });

    }catch(err){
        next(new CustomError(err.message, 500));
    }
  }

  bannerDelete = async (req, res, next) => {
    try {
  
      const bannerDeleteData = await bannerSchmea.findByIdAndUpdate(req.params.id,{isDelete:false});
      res.status(200).json({ bannerDeleteData });
    } catch (err) {
      next(new CustomError(err.message, 500));
    }
  };
}


module.exports=Banneres