var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    name: String,
    squares: [],
    color: String
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;
module.exports.Schema = playerSchema;

module.exports.createPlayer = function(name, callback) {
  var player = new Player({name: name});
  player.save(function(err) {
    if (!err) {
      console.log("created player with id " + player._id);
      callback(player);
    } else {
      console.log("error creating player");
      callback(null);
    }
  })
}
