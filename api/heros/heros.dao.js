var mongoose=require('mongoose')
var heroSchema=require('./heros.model');
// var properties = require('../../config/properties');
var db = require('../../config/database');
ok()
// adding static functions to the model
heroSchema.statics = {
    create : function(data, cb) {
        var hero = new herosModel(data);
        // console.log(cb)
        hero.save(cb)
        // console.log('dfdsfsfd')
    },
    get: function(query, cb) {
        // console.log(cb)
        this.find(query, cb)
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },
    
    update: function(filter, update, cb) { 
        this.findOneAndUpdate(filter, update, {
            returnOriginal: false
        }, cb);
    },
    
    delete: function(conditions, callback) {
        this.findOneAndDelete(conditions, callback) // executes
    }

}

var herosModel=mongoose.model('Heros',heroSchema);

module.exports=herosModel;
