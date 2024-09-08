


const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.json({
    message:"pr2077"
  });
});


// Define POST route
app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  let laugh=req.body.axaxa; // Extract data from the request body
  res.json({ 
    message: `Hello ${name}, your age is ${age}` ,
    laugh:`${laugh}`
  });

});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


