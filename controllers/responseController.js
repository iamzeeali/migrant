const Response = require("../models/responseModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");

exports.getAllResponses = factory.getAll(Response);
exports.getResponse = factory.getOne(Response);
exports.updateResponse = factory.updateOne(Response);
exports.deleteResponse = factory.deleteOne(Response);

// Post Response
exports.createResponse = catchAsync(async (req, res, next) => {
  const {
    request,
    respondedBy,
    sourceState,
    sourceCity,
    destinationState,
    destinationCity,
    localAddress,
    destinationAddress,
    travellers,
    travelMedium,
    vehicleNo,
    travelDate,
    aadharNo,
    description,
  } = req.body;
  const responseField = {};

  if (request) responseField.request = request;
  if (respondedBy) responseField.respondedBy = respondedBy;
  if (sourceState) responseField.sourceState = sourceState;
  if (sourceCity) responseField.sourceCity = sourceCity;
  if (destinationState) responseField.destinationState = destinationState;
  if (destinationCity) responseField.destinationCity = destinationCity;
  if (localAddress) responseField.localAddress = localAddress;
  if (destinationAddress) responseField.destinationAddress = destinationAddress;
  if (travelMedium) responseField.travelMedium = travelMedium;
  if (vehicleNo) responseField.vehicleNo = vehicleNo;
  if (travelDate) responseField.travelDate = travelDate;
  if (aadharNo) responseField.aadharNo = aadharNo;
  if (description) responseField.description = description;
  if (travellers) {
    responseField.travellers = travellers
      .toString()
      .split(",")
      .map((trv) => trv.trim());
  }
  try {
    // Using upsert option (creates new doc if no match is found):
    let docs = await Response.create(responseField);
    res.status(200).json({
      status: "success",
      result: docs.length,
      data: {
        data: docs,
      },
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
  next();
});
