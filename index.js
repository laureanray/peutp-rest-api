let express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

require('./components/User')(app);

module.exports = app;
