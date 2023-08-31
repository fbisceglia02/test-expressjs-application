var express = require('express');
var app = module.exports = express.createServer();

require('./config/environment')(app, express);
require('./config/routes')(app);

