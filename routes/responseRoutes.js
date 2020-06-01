const express = require("express");
const authController = require("./../controllers/authController");
const responseController = require("./../controllers/responseController");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

router.use(authController.restrictTo("super-admin", "admin"));
router
  .route("/")
  .get(responseController.getAllResponses)
  .post(responseController.createResponse);

router
  .route("/:id")
  .get(responseController.getResponse)
  .patch(responseController.updateResponse)
  .delete(responseController.deleteResponse);

module.exports = router;
