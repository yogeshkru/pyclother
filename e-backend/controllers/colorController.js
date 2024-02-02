const colorSchema = require("../model/colorModel");
const customError = require("../utils/customError");

class ColorController {
  // Create
   async colorCreate(req, res, next) {
    try {
      const colorAlready = await colorSchema.findOne({
        color: req.body.color_title,
      });
      if (colorAlready) {
        return res
          .status(409)
          .json({ message: "color is already exists", colorAlready });
      }
   
      let createColor = await colorSchema.create(req.body);
      res.status(200).json({ createColor });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  }

  // Get
   async colorGet(req, res, next) {
    try {
      const colorAllget = await colorSchema.find();
      res.status(200).json({ colorAllget });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  }

  // Update
   async colorUpdate(req, res, next) {
    try {
      const colorUpdateOne = await colorSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { runValidators: true, new: true }
      );
      if (!colorUpdateOne) {
        return next(new customError("Given id is not exists", 409));
      }
      res.status(200).json({ colorUpdateOne });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  }

  // Delete
   async colorDelete(req, res, next) {
    try {
      await colorSchema.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "deleted" });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  }

  // Find One
   async colorFindOne(req, res, next) {
    try {
      const colorFind = await colorSchema.findById(req.params.id);
      res.status(200).json({ colorFind });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  }
}

module.exports = ColorController;
