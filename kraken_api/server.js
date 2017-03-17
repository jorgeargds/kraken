// Bring in our dependencies
const express = require('express')
const app = express()
const routes = require('./routes');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:root@52.41.138.64:27017/kraken');
       

//  Connect all our routes to our application
app.use('/', routes);

// Turn on that server!
app.listen(8080, () => {
  console.log('App listening on port 8080');
});
