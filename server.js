const express = require("express");

/* const mongoose = require("mongoose"); */
 
const app = express();
const PORT = process.env.PORT || 3001;

var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
 


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());


// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

var routes = require("./routes/apiRoutes")
routes(app);
// Serve up static assets (usually on heroku)
/* if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
} */
 



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/journal-project");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});




