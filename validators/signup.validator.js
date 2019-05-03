const { body } = require('express-validator/check');

const signupValidatorAPI = () => {
    return [
        body('email').exists().trim().withMessage('Email is required').isEmail().withMessage('Invalid Email'),
        body('password').exists().trim().withMessage('Password is required')
            .isLength({min: 8}).withMessage('Password Length must be 8+ char long')
            .matches(/\d/).withMessage('Password must contains numbers'),
        body('name').exists().trim().withMessage('Name is required')
    ]
}

module.exports = {
   POST:  signupValidatorAPI
}