const mongoose = require('mongoose');
const isEmail = require('validator').isEmail;

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  name: { type: String, required: true },
  avatar: {type: String, required: false},
  email: { 
    type: String, 
    required: true, 
    validate:{
      validator: isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
    }, 
    select: false
  },
  description: { type: String, required: true },
  yearStartedPlaying: { type: Number, required: true },
  pay: { type: Object, required: true }, // AMOUNT/GAME/HOURLY
  availableOnline: { type: Boolean, required: false },
  availableInPerson: { type: Boolean, required: false}, 
  daysAvailable: { type: Array, required: true }, // DAYS & TIMES
  interests: { type: Array, required: false },
  location: { type: String, required: false },
  timeZone: { type: String, required: true },
}, {
  timestamps: true,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;