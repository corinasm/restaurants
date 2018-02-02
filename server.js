// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();

// require bodyParser since we need to handle post data for adding users or things in DB
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());   

// static content 
app.use(express.static( __dirname + '/client/dist' ));

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable

var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./client/dist/index.html"))
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
