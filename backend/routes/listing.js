const router = require('express').Router();
const Listing = require('../models/listing.js');

// Get list of listings
router.route('/').get((req, res) => {
  Listing.find()
    .then(listings => res.json(listings))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add Listing
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const avatar = req.body.avatar;
  const email = req.body.email;
  const description = req.body.description;
  const yearStartedPlaying = req.body.yearStartedPlaying;
  const pay = req.body.pay;
  const availableOnline = req.body.availableOnline;
  const availableInPerson = req.body.availableInPerson;
  const daysAvailable = req.body.daysAvailable;
  const interests = req.body.interests;
  const location = req.body.location;
  const timeZone = req.body.timeZone;

  const newListing = new Listing({
    name,
    avatar,
    email,
    description,
    yearStartedPlaying,
    pay,
    availableOnline,
    availableInPerson,
    daysAvailable,
    interests,
    location,
    timeZone,
  });

  newListing.save()
  .then(() => res.json('Listing added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Get by id
router.route('/:id').get((req, res) => {
  Listing.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete by id
router.route('/:id').delete((req, res) => {
  Listing.findByIdAndDelete(req.params.id)
    .then(() => res.json('Listing deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update
router.route('/update/:id').post((req, res) => {
  Listing.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Listing updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;