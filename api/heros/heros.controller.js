var Heros = require('./heros.dao');


    // var hero = {
    //     name: 'hea',
    //     description: "fjslkdfjlskajdflkasjflkasjfdlksajflkj"
    // };

    exports.createHero = function (req, res, next) {
        var hero = {
            name: req.body.name,
            description: req.body.description
        };
    
        Heros.create(hero, function(err, hero) {
            if(err) {
                res.json({
                    error : err
                })
            }
            res.json({
                message : "Hero created successfully"
            })
        })
    }

    exports.getHeros = function(req, res, next) {
        Heros.get({}, function(err, heros) {
            if(err) {
                res.json({
                    error: err
                })
            }
            res.json({
                heros: heros
            })
        
        })
    }

    exports.getHero = function(req, res, next) {
        Heros.get({name: req.params.name}, function(err, heros) {
            if(err) {
                res.json({
                    error: err
                })
            }
            res.json({
                heros: heros
            })
        })
    }

    // const update = { description: 'fuckyou world' };
    exports.updateHero = function(req, res, next) {
        const filter = { _id: req.params.id };
        var update = {
            name: req.body.name,
            description: req.body.description
        }
        Heros.update(filter, update, function(err, hero) {
            if(err) {
                res.json({
                    error : err
                })
            }
            res.json({
                message : "Hero updated successfully"
            })
        })
    }
    exports.removeHero = function(req, res, next) {
        const filter = { _id: req.params.id };
        Heros.delete(filter, function(err, hero) {
            if(err) {
                res.json({
                    error : err
                })
            }
            res.json({
                message : "Hero deleted successfully"
            })
        })
    }

    





