var mongoose = require('mongoose')

// get sechema function from mongoose
var Schema = mongoose.Schema;

//construct a schema
var herosSchema = new Schema({
    // The unique constraint ensures 
    // that all values in a column are different.
    name: {
        type: String,
        unique: false,
        required: true
    },
    description: {
        type: String,
        unique: false,
        required: true
    }
})
// default export
module.exports = herosSchema;
