var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Player = require('./Player');
var _ = require('lodash');

var gameSchema = new Schema({
    size: {
      type: Number,
      default: 4
    },
    title: {
      type: String,
      default: 'Multiplayer Game'
    },
    players: [Player.Schema],
    maxPlayers: {
      type: Number,
      default: 6
    }
});

var Game = mongoose.model('Game', gameSchema);

module.exports = Game;

module.exports.createGame = function(size, callback) {
  var game = new Game({size: size});
  game.save(function(err) {
    if (!err) {
      console.log("created game with id " + game._id);
      callback(game);
    } else {
      console.log("Error while creating game");
      console.log(err);
      callback(null);
    }
  })
}

module.exports.clearAll = function(callback) {
  Game.remove({}, callback);
}

module.exports.joinGame = function(player, gameID, callback) {
  var playerColors = ['blue', 'red', 'yellow', 'green', 'purple', 'black'];
  Game.findById(gameID, function(error, game) {
    player.color = playerColors[game.players.length];
    game.players.push(player);
    game.save(function(err) {
      if (!err) {
        console.log("Player " + player._id + " joined game " + game._id + " color " + player.color);
        callback(player, game);
      } else {
        console.log("error joining game");
        callback(null);
      }
    })
  })
}

module.exports.getGame = function(game, callback) {
  Game.findById(game._id, function(err, game) {
    callback(game);
  })
}

module.exports.selectSquare = function(gameID, playerID, squareID, callback) {
  Game.findById(gameID, function(err, game) {
    if (!err) {
        // var player = _.find(game.players, {_id: playerID});
        var player = (function(players) {
          var p;
          players.forEach(function(player) {
            if (player._id == playerID) {
              p = player;
            }
          });
          return p;
        })(game.players)
        player.squares.push(squareID);
        game.save(function(err) {
          if (!err) {
            callback(true);
          } else {
            console.log("error selecting square");
            callback(null);
          }
        })

    } else {
      console.log("error selecting square");
      callback(null);
    }
  })
}

module.exports.getAll = function(callback) {
  Game.find({}, function(err, games) {
    if (!err) {
      callback(games);
    } else {
      console.log("error fetching games");
      callback(null);
    }
  })
}
