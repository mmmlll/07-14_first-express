const express = require('express')
const app = express()

// all requests will have to go thru this middleware. this is where our Unit 1 files (HTML, CSS) are stored
app.use(express.static('public'))

// listening for request
app.get('/', function (req, res) {
  // res.send('my first response')
  res.sendFile('index.html')
})

app.get('/about', function(req,res){
  res.send('about page has been changed')
})

app.get('/about/:name/:id', function(req,res){
  res.send(req.params)
})

app.listen(3000, function() {
  console.log('express is running on port 3000')
})
