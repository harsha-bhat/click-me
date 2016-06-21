import io from 'socket.io-client'

var socket

module.exports = {}

module.exports.connect = function(callback) {
  socket = io.connect('https://click-me-grid.herokuapp.com/')
  socket.on('connect', function() {
    console.log('connected to server')
    callback()
  })
}

module.exports.createGame = function(size, callback) {
  socket.emit('game-create', 4)
  socket.on('game-created', function(game) {
    console.log('Created game')
    console.log(game)
    callback(game)
  })
}

module.exports.createPlayer = function(name, callback) {
  socket.emit('player-create', name)
  socket.on('player-created', function(player) {
    console.log('Player created')
    console.log(player)
    callback(player)
  })
}

module.exports.joinGame = function(player, gameID, callback) {
  socket.emit('join-game', {player: player, gameID: gameID})
  socket.on('joined-game', function(data) {
    console.log(data.player.name + ' joined the game')
    callback(data)
  })
}

module.exports.selectSquare = function(gameID, playerID, squareID) {
  var data = {gameID: gameID, playerID: playerID, squareID: squareID}
  console.log('select square')
  console.log(data)
  socket.emit('square-select', data)
}

module.exports.selectSquareListener = function(callback) {
  socket.on('square-selected', function(data) {
    console.log('square selected')
    callback(data)
  })
}
