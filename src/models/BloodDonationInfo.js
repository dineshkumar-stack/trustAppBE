const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    name: String,
    bloodType: String,
    contact: String,
    age: Number,
    weight: Number,
    gender: String,
    lastDonationDate: Date,
    donateTotalCount: Number,
    timeStamp: {
        type: Date,
        default: Date.now,
      },
    healthConditions: [String],
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String
    },
    additionalInfo: String
  });

//cleanup__
donationSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

module.exports = mongoose.model("BloodDonation", donationSchema);
