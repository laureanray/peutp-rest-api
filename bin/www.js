/*
  Load all the modules.
  Set port 
*/  
const colors = require('colors');
const mongoose = require('mongoose');
let app = require('../app');
let port = process.env.PORT || '3000';

/*
  Initialize and load config file. 
*/  
require('../config/config');


/*
  Set the environment. 
*/  
if (process.env.NODE_ENV === 'production') {
  console.log('Production'.bgGreen);
}else if(process.env.NODE_ENV === 'test'){
  console.log('Testing Env'.bgCyan);
}else if(process.env.NODE_ENV === 'development') {
  console.log('Development'.bgRed);
}else{
  console.log(`[${process.env.NODE_ENV}]`)
}

/*
  MongoDB Connection through Mongoose
*/  


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen(port);
});

module.exports = app;