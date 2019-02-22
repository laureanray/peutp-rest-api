let express = require('express');
let app = express();

const bodyParser = require('body-parser');
const userRoutes = require('./components/User/user');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/user', userRoutes);


module.exports = app;
