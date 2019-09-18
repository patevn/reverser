var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Launch listening server on port 6996
app.listen(6996, function () {
  console.log('app listening on port 6996!')
})