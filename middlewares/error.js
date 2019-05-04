const expressConfig = require('../configuration/express.config');

const makeError = (message, status) => {
    let err = message instanceof Error ? message: new Error(message);
    err.status = status;
    throw err;
}

const error404 = (req, res, next) => {
    let err = makeError('Not Found', 404);
    return next(err);
}

const handleRouteErrors = (error, req, res, next) => {
    
    if (expressConfig.isDevelopment) {
       // if(error.stack) console.error(error.stack)
        return res.status(error.status || 500).json({error: error.message})
    }
    return res.status(error.status || 500).json({error: 'Internal Server Error'})
}

const processBadRequestError = async (errors, res) => {
    const errorMessage = await errors.array().map(error => {
        const rObj = {}
        rObj[error.param] = error.msg
        return rObj
    })
    res.status(422).json({errorMessage})
}

module.exports = {
    makeError,
    error404,
    handleRouteErrors,
    processBadRequestError
}