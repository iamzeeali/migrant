const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  request: {
    type: mongoose.Schema.ObjectId,
    ref: "Request",
  },
  respondedBy: {
    type: String,
  },
  sourceState: {
    type: String,
  },
  sourceCity: {
    type: String,
    required: true,
  },
  destinationState: {
    type: String,
    required: true,
  },
  destinationCity: {
    type: String,
    required: true,
  },
  localAddress: {
    type: String,
  },
  destinationAddress: {
    type: String,
    required: true,
  },
  travellers: [String],
  travelMedium: {
    type: String,
  },
  vehicleNo: {
    type: String,
  },
  travelDate: {
    type: Date,
  },
  aadharNo: {
    type: String,
  },
  description: { type: String },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

responseSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name",
  }).populate({
    path: "request",
  });

  next();
});

module.exports = Response = mongoose.model("Response", responseSchema);
