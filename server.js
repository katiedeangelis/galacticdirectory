///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
// Import routes and give the server access to them.
var routes = require("./controller/galactic_directory_router.js");
// Set Handlebars.
var app = express();

///////////////////////////////////////////////////////////////////////////////////////
//                               App & Database Config                               //
///////////////////////////////////////////////////////////////////////////////////////

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

///////////////////////////////////////////////////////////////////////////////////////
//                                       Routes                                      //
///////////////////////////////////////////////////////////////////////////////////////
app.use("/", routes);

app.listen(port, function() {
    console.log("listening on port", port);
  });