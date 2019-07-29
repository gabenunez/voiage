const mongoose = require('mongoose');
const isEmail = require('validator').isEmail;

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    validate:{
      validator: isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
  }},
  description: { type: String, required: true },
  yearsExperience: { type: Number, required: true },
  games: { type: Array, required: true },
  pay: { type: Object, required: true }, // AMOUNT/GAME/HOURLY
  location: { type: Array, required: true }, // IN PERSON & ONLINE
  availability: { type: Array, required: true }, // DAYS & TIMES
  timeZone: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;