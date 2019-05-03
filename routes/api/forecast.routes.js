const express             = require('express');
const router              = express.Router();
const forecastController  = require('../../controllers/forecast.controllers');
const forecastValidator   = require('../../validators/forecast.validator');

router.post('/history', forecastValidator.POST() ,forecastController.history )

module.exports = router;