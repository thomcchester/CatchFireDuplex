var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var games = new Schema({

      numberOfTeams: {type: Number},

});

module.exports = mongoose.model("Games", games);
