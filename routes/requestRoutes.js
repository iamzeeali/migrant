const express = require("express");
const requestController = require("./../controllers/requestController");
const authController = require("./../controllers/authController");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

router.use(authController.restrictTo("super-admin", "admin"));

router
  .route("/")
  .get(requestController.getAllRequests)
  .post(requestController.createRequest);

router
  .route("/:id")
  .get(requestController.getRequest)
  .patch(requestController.updateRequest)
  .delete(requestController.deleteRequest);

module.exports = router;
