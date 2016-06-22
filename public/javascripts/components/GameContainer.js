import React from 'react'
import GameLayout from './GameLayout'
import _ from 'lodash'
import socket from '../socket'

class GameContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      gameID: null,
      currentPlayer: null,
      size: 4,
      players: [],
      modalOpen: false,
      winner: ''
    }
  }

  componentDidMount() {
    var that = this
    socket.connect(function() {
      socket.createGame(4, function(game) {
        that.setState({gameID: game._id})
        socket.createPlayer('Player 1', function(player) {
          that.setState({currentPlayer: player})
          socket.joinGame(that.state.currentPlayer, that.state.gameID, function(data) {
            if (that.state.players.length === 0 && data.game.players.length > 0) {
              console.log("setting players from game");
              console.log(data.game.players);
              that.setState({players: data.game.players})
            }
            that.addPlayer(data.player)
          })
        })
      })

      socket.selectSquareListener(that.selectSquareListener.bind(that))
      socket.leaveGameListener(that.leaveGameListener.bind(that))
    })
  }

  addPlayer (player) {
    var p = _.find(this.state.players, {_id: player._id})
    if (!p) {
      console.log("Adding player")
      var players = this.state.players
      players.push(player)
      this.setState({players: players})
    }
  }

  removePlayer (playerID) {
    console.log("remove player " + playerID);
    var p = _.find(this.state.players, {_id: playerID})
    if (p) {
      console.log("Removing player")
      var players = []
      this.state.players.forEach(function(player) {
        if (player._id != playerID) {
          players.push(player)
        }
      })
      this.setState({players: players})
    }
  }

  selectSquare (squareID) {
    socket.selectSquare(this.state.gameID, this.state.currentPlayer._id, squareID)
  }

  selectSquareListener (data) {
    var playerID = data.playerID
    var squareID = data.squareID
    var players = this.state.players
    var player = _.find(players, {_id: playerID})
    player.squares.push(squareID)
    this.setState({players: players})

    var squareCount = 0
    players.forEach(function(player) {
      squareCount += player.squares.length
    })
    if (squareCount >= (this.state.size*this.state.size)) {
      var maxScore = 0
      var winner = ''
      players.forEach(function(player) {
        if (player.squares.length > maxScore) {
          maxScore = player.squares.length
          winner = player.name
        }
      })
      this.setState({winner: winner, modalOpen: true})
    }
  }

  leaveGameListener (data) {
    var playerID = data.playerID
    this.removePlayer(playerID)
  }

  closeModal () {
    this.setState({modalOpen: false})
  }

  render () {
    return (
      <GameLayout winner={this.state.winner} modalOpen={this.state.modalOpen} closeModal={this.closeModal.bind(this)} size={this.state.size} players={this.state.players} select={this.selectSquare.bind(this)}></GameLayout>
    )
  }
}

export default GameContainer
