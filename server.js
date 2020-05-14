// require express/
var express = require('express');
var properties = require('./config/properties');
var db = require('./config/database');

// hero routes
var herosRoutes = require('./api/heros/heros.routes');
var logger =require('morgan');
var dev = require('node-dev')

// for express usage
var app= express()
var bodyParser = require('body-parser');

// for input requests
//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

//  load the router module in the app:
app.use('/api', herosRoutes)

// call the database connectivity function
ok()

// configure app.use()
app.use(logger('combined'));
app.use(dev)
app.use(bodyParserJSON);


// Error handling
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});
// listen 4000 ports from properties module
// console.log(properties)
app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`)
} )
