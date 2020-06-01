const Request = require("../models/requestModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");

// exports.getAllRequests = factory.getAll(Request);

exports.getAllRequests = catchAsync(async (req, res, next) => {
  const docs = await Request.find({
    responded: false,
  });
  res.status(200).json({
    status: "success",
    result: docs.length,
    data: {
      data: docs,
    },
  });
});

exports.AllRequests = catchAsync(async (req, res, next) => {
  const docs = await Request.find();
  res.status(200).json({
    status: "success",
    result: docs.length,
    data: {
      data: docs,
    },
  });
});

exports.getRequest = factory.getOne(Request);
exports.updateRequest = factory.updateOne(Request);
exports.deleteRequest = factory.deleteOne(Request);

// Post Request
exports.createRequest = catchAsync(async (req, res, next) => {
  const {
    requestBy,
    sourceState,
    sourceCity,
    destinationState,
    destinationCity,
    localAddress,
    destinationAddress,
    travellers,
    phone1,
    phone2,
    travelDate,
    aadharNo,
    description,
  } = req.body;
  const requestField = {};

  if (requestBy) requestField.requestBy = requestBy;
  if (sourceState) requestField.sourceState = sourceState;
  if (sourceCity) requestField.sourceCity = sourceCity;
  if (destinationState) requestField.destinationState = destinationState;
  if (destinationCity) requestField.destinationCity = destinationCity;
  if (localAddress) requestField.localAddress = localAddress;
  if (destinationAddress) requestField.destinationAddress = destinationAddress;
  if (phone1) requestField.phone1 = phone1;
  if (phone2) requestField.phone2 = phone2;
  if (travelDate) requestField.travelDate = travelDate;
  if (aadharNo) requestField.aadharNo = aadharNo;
  if (description) requestField.description = description;
  if (travellers) {
    requestField.travellers = travellers
      .toString()
      .split(",")
      .map((trv) => trv.trim());
  }
  try {
    // Using upsert option (creates new doc if no match is found):
    let docs = await Request.create(requestField);
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
