var Heros=require('./heros.controller')
var express = require('express');
var router = express.Router()
// set default export for reuse purposes
    router.post('/create', Heros.createHero);
    router.get('/get', Heros.getHeros);
    router.get('/get/:name', Heros.getHero);
    router.put('/update/:id', Heros.updateHero);
    router.delete('/remove/:id', Heros.removeHero);
    
module.exports=router

