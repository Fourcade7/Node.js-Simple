


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

app.post("/pr",(req,res)=>{

  console.log("Request Params:", req.params);    // Should log route parameters (if defined)
  console.log("Request Query:", req.query);      // Logs query string parameters
  console.log("Request Body:", req.body);        // Logs body (if middleware is applied)
  console.log("Request Headers:", req.headers);  // Logs HTTP headers
  console.log("Request Headers:", req.headers["df"]);  // Logs HTTP headers
  console.log("Request Method:", req.method);    // Logs the HTTP method
  console.log("Request URL:", req.url);          // Logs the full URL
  console.log("Request Path:", req.path);        // Logs the path of the request

  res.json({ message: "Successfully received request" });
  
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




function fourcade(names,callback){
  console.log(names);
  callback("axax","xixixi");
  
}//addd

fourcade("fourcade2077", (data1,data2)=>{
  console.log('Callback executed with:', data1, data2);
  
})