const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json(Date.now())
});

module.exports = router;