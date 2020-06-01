const express = require("express");
const requestController = require("./../controllers/requestController");

const router = express.Router();

router
  .route("/")
  .get(requestController.getAllRequests)
  .post(requestController.createRequest);

router.route("/all").get(requestController.AllRequests);
router
  .route("/:id")
  .get(requestController.getRequest)
  .patch(requestController.updateRequest)
  .delete(requestController.deleteRequest);

module.exports = router;
