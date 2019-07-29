const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  experience: { type: String, required: true },
  game: { type: String, required: true },
  payRate: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;