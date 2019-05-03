const { body } = require('express-validator/check');

const signinValidatorAPI = () => {
    return [
        body('email').exists().trim().withMessage('Email is required').isEmail().withMessage('Invalid Email'),
        body('password').exists().trim().withMessage('Password is required')
    ]
}

module.exports = {
   POST:  signinValidatorAPI
}