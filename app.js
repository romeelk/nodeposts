//By me
var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

const PORT = process.env.PORT || 3000;

var app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendfile('layouts/index.html')
  console.log("sending index.html")
})


app.use(require('./controllers/api/posts'))
app.use( require('./controllers/static'))
app.use(function(req, res) {
        res.sendfile('layouts/404.html', 404);
        });


app.listen(PORT, function () {
  console.log('Server listening on', 3000)
})
