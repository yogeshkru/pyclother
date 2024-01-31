const categorySchema = require("../model/categoryModel");
const customError = require("../utils/customError");

class CategoryController {
  //Post
  async categoryDetail(req, res, next) {
   
    try {
      const categoryAlready=await categorySchema.findOne({category_title:req.body.category_title})
      if(categoryAlready){
        return next(new customError("This category Already exists"))
      }
      let { category_title } = req.body;

      const categoryCreate = await categorySchema.create({ category_title });
      res.status(200).json({ categoryCreate });
    } catch (err) {
      next(new customError(err.message, 500));
    }
  }

  //Get
  categoriesAllget = async (req, res, next) => {
    try {
      const categorieget = await categorySchema.find();
      res.status(200).json({ categorieget });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  };

  //Patch
  categorieUpdate = async (req, res, next) => {
    try {
      const categoriepatch = await categorySchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { runValidators: true, new: true }
      );
      res.status(200).json({ categoriepatch });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  };

  //Delete
  categorieDelete = async (req, res, next) => {
    try {
      const categoriedeletedata = await categorySchema.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json({ categoriedeletedata });
    } catch (err) {
      return next(new customError(err.message));
    }
  };

  //findid
  categorieFind=async(req,res,next)=>{
    try{
       const categoriefindId=await categorySchema.findById(req.params.id)
       res.status(200).json({categoriefindId})
    }catch(err){
      return next(new customError(err.message,500))
    }
  }
}

module.exports = CategoryController;
