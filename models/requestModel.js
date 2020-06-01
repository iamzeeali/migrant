const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  requestBy: {
    type: String,
  },
  sourceState: {
    type: String,
    required: true,
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
  phone1: {
    type: Number,
  },
  phone2: {
    type: Number,
  },
  travelDate: {
    type: Date,
  },
  aadharNo: {
    type: String,
  },
  responded: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

requestSchema.pre(/^find/, function (next) {
  this.find({ responded: { $ne: true } });
  next();
});

module.exports = Request = mongoose.model("Request", requestSchema);
