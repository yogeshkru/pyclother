const couponSchmea = require("../model/couponModel");
const CustomError = require("../utils/customError");

class Coupoundeatils {
  //create
  async couponCreate(req, res, next) {
    try {
      const couponData = await couponSchmea.create(req.body);
      res.status(200).json({ couponData });
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  }

  //get
  couponGet = async (req, res, next) => {
    try {
      const coupongetdata = await couponSchmea.find();
      res.status(200).json({ coupongetdata });
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  };

  //patch
  couponPatch = async (req, res, next) => {
    try {
      const couponpatchupdate = await couponSchmea.findByIdAndUpdate(
        req.params.id,
        req.body,
        { runValidators: true, new: true }
      );
      if (!couponpatchupdate) {
        const error = new CustomError("Given Id is not exist", 401);
        return next(error);
      }
      res.status(200).json({ couponpatchupdate });
    } catch (err) {
      next(new CustomError(err.message, 401));
    }
  };

  // delete

  couponeDelete = async function (req, res, next) {
    try {
      const couponDelete = await couponSchmea.findByIdAndUpdate(req.params.id,{isDelete:false});

      if (!couponDelete) {
        const error = new CustomError("Given Id is not exist", 401);
        return next(error);
      }

      res.status(200).json({ couponDelete });
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
  };

  //   getOne
  async couponOneGet(req, res, next) {
    try {
      const getOne = await couponSchmea.findById(req.params.id);

      if (!getOne) {
        return next(new CustomError("Given Id is not exist", 401));
      }

      res.status(200).json({ message:"Deleted" });
    } catch (error) {
      next(new CustomError(error.message));
    }
  }
}

module.exports = Coupoundeatils;
