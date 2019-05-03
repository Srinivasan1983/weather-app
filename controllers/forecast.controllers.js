const {getWeatherForecast}       = require('../service/weather.service');
const { processBadRequestError } = require('../middlewares/error');
const { validationResult }       = require('express-validator/check');

const history = async (req, res, next) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return processBadRequestError(errors, res)
    }
    try {
        const { location, country } = req.body

        const units = 'imperial'
        const result = await getWeatherForecast(location, country, units)
        return res.status(result.status).json(result.data.list)
        
    } catch (error) {
        return next(error)
    }
    
}

module.exports = {
    history
}