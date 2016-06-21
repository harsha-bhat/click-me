var Game = require('../models/Game');
var Player = require('../models/Player');

module.exports = function (server) {
  var io = require('socket.io')(server);
  var game;
  Game.clearAll(function() {
    Game.createGame(4, function(newgame) {
      game = newgame;
    })
  })

  io.on('connection', function(socket) {
    console.log("Connected to a client");
    socket.on('news', function(message) {
      console.log("Responding with news");
      io.sockets.emit('news', 'news')
    })

    socket.on('game-create', function(size) {
      socket.emit('game-created', game);
    })

    socket.on('player-create', function(name) {
      Player.createPlayer(name, function(player) {
        socket.emit('player-created', player);
      })
    })

    socket.on('join-game', function(data) {
      var player = data.player;
      var gameID = data.gameID;

      Game.joinGame(player, gameID, function(player, game) {
          io.sockets.emit('joined-game', {player: player, game: game});
      })
    })

    socket.on('square-select', function(data) {
      console.log('square-select');
      var gameID = data.gameID;
      var playerID = data.playerID;
      var squareID = data.squareID;

      Game.selectSquare(gameID, playerID, squareID, function(selected) {
        if (selected) {
          console.log('square-selected');
          io.sockets.emit('square-selected', {playerID: playerID, squareID: squareID});
        }
      })
    })

  })
}
