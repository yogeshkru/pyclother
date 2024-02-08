const brandModel = require("../model/brandModel");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");

//Post
// exports.brandTitle = asyncErrorhandler(async (req, res, next) => {
//   try {
//     const brandAlready = await brandModel.findOne({ brand_title: req.body.brand_title });
//     console.log(brandAlready)
//     if (brandAlready) {
//       return next(new customError("Brand is already exists", 409));
//     }
//     const { brand_title } = req.body;

//     let brand = await brandModel.create({ brand_title });
//     res.status(201).json({ brand });
//   } catch (err) {
//     return next(new customError(err.message, 500));
//   }
// });

// //get
// exports.getAllbrands = asyncErrorhandler(async (req, res, next) => {
//   try {
//     const getbrand = await brandModel.find();
//     res.status(200).json({ getbrand });
//   } catch (err) {
//     return next(new customError(err.message, 500));
//   }
// });

// //update
// exports.updateBrand = asyncErrorhandler(async (req, res, next) => {
//   try {
//     const updatesbrand = await brandModel.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { runValidators: true, new: true }
//     );
//     res.status(200).json({ updatesbrand });
//   } catch (err) {
//     return next(new customError(err.message, 500));
//   }
// });

// //Delete
// exports.deleteBrand = asyncErrorhandler(async (req, res, next) => {
//   try {
//     const deletesbrand = await brandModel.findByIdAndDelete(req.params.id);
//     res.status(200).json({ deletesbrand });
//   } catch (err) {
//     return next(new customError(err.message, 500));
//   }
// });

// //findone
// exports.findBrand = asyncErrorhandler(async (req, res, next) => {
//   try {
//     const findBrand = await brandModel.findById(req.params.id);
//     res.status(200).json({ findBrand });
//   } catch (err) {
//     next(new customError(err.message, 500));
//   }
// });

//CLASS

class BrandController {
  // Create
  async brandTitle(req, res, next) {
    try {
      const brandAlready = await brandModel.findOne({
        brand_title: req.body.brand_title,
      });
      if (brandAlready) {
        return next(new customError("Brand is already exists", 409));
      }
      
      let brand = await brandModel.create(req.body);
      res.status(201).json({ brand });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  }

  // Read
  async getAllBrands(req, res, next) {
    try {
      const getBrands = await brandModel.find();
      res.status(200).json({ getBrands });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  }

  // Update
  async updateBrand(req, res, next) {
    try {
      const updatedBrand = await brandModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { runValidators: true, new: true }
      );
      res.status(200).json({ updatedBrand });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  }

  // Delete
  async deleteBrand(req, res, next) {
    try {
      const deletedBrand = await brandModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ deletedBrand });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  }

  // Find One
  async findBrand(req, res, next) {
    try {
      const foundBrand = await brandModel.findById(req.params.id);
      res.status(200).json({ foundBrand });
    } catch (err) {
      next(new customError(err.message, 500));
    }
  }
}

module.exports = BrandController;
