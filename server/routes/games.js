var express = require('express');
var router = express.Router();
var Games = require("../models/games.js");


router.route('/')
    .get(function(req, res){
        Games.find(function(err, games){
            if(err){console.log(err);}
            res.send(games);
        });
    })

    .post(function(req, res){
        var games = new Default({
            numberOfTeams:req.body.numberOfTeams,

        });
        Games.save(function(err, games){
            if(err) console.log(err);
            res.send(games);
        });
    });

    router.route('/:id').put(function(req, res){
        Games.findById(req.body._id, function(err, games){
            if(err) res.send(err);
            console.log(req.body);

            games.numberOfTeams= req.body.numberOfTeams;
            defaults.save(function(err){
                if(err) res.send(err);
                res.json({message: 'making games'});
            });
        });
    });

module.exports = router;
