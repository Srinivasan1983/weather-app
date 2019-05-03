const apiConstants = require('../constants/api.constants');
const forecastRouter   = require('../routes/api/forecast.routes');

const configure = app => {
    
    app.use(`${apiConstants.API_PATH}/forecast`, forecastRouter);
}

module.exports = {
    configure
}