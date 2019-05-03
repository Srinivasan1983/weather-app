const { body } = require('express-validator/check');

const forecastValidatorAPI = () => {
    return [
        //body('time').not().isEmpty().withMessage('date/time is required'),
        body('location').not().isEmpty().withMessage('location is required'),
        body('country').not().isEmpty().withMessage('country is required')
    ]
}

module.exports = {
   POST:  forecastValidatorAPI
}