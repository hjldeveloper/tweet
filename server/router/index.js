const router = require('express').Router();
require('express-async-errors');

// router.use('/tweets', require('./tweets'));
router.use('/tweets', require('./tweets'));

module.exports = router;
