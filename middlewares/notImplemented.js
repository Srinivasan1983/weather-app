const Errors = require('restify-errors');

const errorHandler404 = (error,req, res, next) => {
    if (error && error.statusCode) {
        if (error.statusCode === (new Errors.BadRequestError()).statusCode) {
            res.status(error.statusCode).json({...error.body, errors: error.jse_info, success: false})
        } else {
            res.status(error.statusCode).json({...error.body, success: false})
        }
    } else if (error && !error.statusCode) { 
            res.status(500).json({...(new Errors.InternalServerError()).body, success: false})
    } else if(next) {
        next();
    }
}

module.exports =  errorHandler404;