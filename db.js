var mongoose = require('mongoose')
mongoose.connect('mongodb://mongo:27017/social', function () {
  console.log('mongodb connected')
})
module.exports = mongoose
