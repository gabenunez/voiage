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
  const email = req.body.email;
  const description = req.body.description;
  const yearsExperience = req.body.yearsExperience;
  const games = req.body.games;
  const pay = req.body.pay;
  const location = req.body.location;
  const availability = req.body.availability;
  const timeZone = req.body.timeZone;
  const date = Date.parse(req.body.date);

  const newListing = new Listing({
    name,
    email,
    description,
    yearsExperience,
    games,
    pay,
    location,
    availability,
    timeZone,
    date,
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