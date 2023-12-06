// Require modules
const express = require('express');

// Create the Express app
const app = express();
  // Mount routes

  app.get('/', function(req, res) {
    res.send('Hello World!');
})
  
  app.get('/greeting/:name', function(req, res) {
    res.send('hello ' + req.params.name );
})

app.get('/tip/:total/:tipPercentage', function(req, res) {
  res.send('Your tip will be ' + req.params.tipPercentage );
})

// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
   });



 

   