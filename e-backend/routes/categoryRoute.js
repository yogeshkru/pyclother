// const express = require('express');
// const CategoryController = require('../controllers/categoryController');
// const router = express.Router();

// const categoryController = new CategoryController();

// // Define a route for creating a new category (POST /api/category/categories)

// // Export the router instance
// module.exports = router;

module.exports = (app) => {
  const CategoryController = require("../controllers/categoryController");
  const { uploadPhoto } = require("../middleware/uploadImages");
  const router = require("express").Router();
  const asyncErrorhandler = require("../utils/asyncErrorhandler");
  let { authenticateUser, restrict } = require("../middleware/auth");
  const {
    categoryDetail,
    categoriesAllget,
    categorieUpdate,
    categorieDelete,
    categorieFind,
  } = new CategoryController();

  router
    .route("/create-category")
    .post(
      authenticateUser,
      restrict("shop admin", "super admin"),
      uploadPhoto.array("images", 1),
      asyncErrorhandler(categoryDetail)
    );
  router
    .route("/get-category")
    .get(
      authenticateUser,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(categoriesAllget)
    );
    router
    .route("/get-category-users")
    .get(
    
      asyncErrorhandler(categoriesAllget)
    );
  router
    .route("/patch-category/:id")
    .patch(
      authenticateUser,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(categorieUpdate)
    );
  router
    .route("/delete-category/:id")
    .delete(
      authenticateUser,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(categorieDelete)
    );
  router
    .route("/find-category/:id")
    .get(
      authenticateUser,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(categorieFind)
    );
  app.use("/api/category", router);
};
