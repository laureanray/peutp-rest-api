let express = require('express');
let app = express();
require('./components/User')(app)

module.exports = app;