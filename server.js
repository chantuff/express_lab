// Require modules
const express = require('express');

// Create the Express app
const app = express();
  // Mount routes

  const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

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

app.get('/magic/:question', (req, res) => {
  // Get the question from the URL parameters
  const question = req.params.question;

  // Get a random response from the array
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  // Send the response 
  res.send(`Question: ${question}<h1>\nAnswer: ${randomResponse}</h1>`);
});


// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
   });



 

   