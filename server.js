const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const helmet     = require('helmet');

const expressConfig  = require('./configuration/express.config');
const routesConfig   = require('./configuration/routes.config');

const {error404, handleRouteErrors} = require('./middlewares/error');

const app = express();
expressConfig.initialize(app);

app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routesConfig.configure(app);

app.use(error404);
app.use(handleRouteErrors);

expressConfig.listen(app);

module.exports = app;