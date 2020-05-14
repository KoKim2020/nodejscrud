//require mongoose module
var mongoose = require('mongoose');
//require chalk module to give colors in the console text
var chalk = require('chalk');
// require database url from properties
var dbURL = require('./properties');

mongoose.set('useFindAndModify', false);

// colors using chalk
var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

// Exporting a Default Value

module.exports = ok = function() {
    mongoose.connect(dbURL.DB, 
        {  
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected Successfully")
    });
}
