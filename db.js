var mongoose = require('mongoose')
var isDocker = require('is-docker')

var mongoHost =  isDocker() ? "mongo" : "localhost";



if (isDocker()) {
  console.log('Running inside a Docker container');

  mongoose.connect('mongodb://'+mongoHost+':27017/social', function () {
    console.log('mongodb connected')
  })
}
else
{
  console.log("Running outside container! connecting to localhost")
  mongoose.connect('mongodb://'+mongoHost+':27017/social', function () {
    console.log('mongodb connected')
  })
}

module.exports = mongoose
