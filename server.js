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

app.get('/tip/:total/:tipPercentage', (req, res) => {
	console.log(req.params);
	res.send('TIP:' + req.params.total * req.params.tipPercentage/100);
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
   });



 

   