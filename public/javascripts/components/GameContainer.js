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
      total: 0
    }
  }

  componentDidMount() {
    var that = this
    socket.connect('http://localhost:3000', function() {
      socket.createGame(4, function(game) {
        that.setState({gameID: game._id})
        socket.createPlayer('Player 1', function(player) {
          that.setState({currentPlayer: player})
          socket.joinGame(that.state.currentPlayer, that.state.gameID, function(data) {
            if (that.state.players.length === 0 && data.game.players.length > 0) {
              console.log("setting players from game");
              that.setState({players: data.game.players})
            }
            that.addPlayer(data.player)
          })
        })
      })

      socket.selectSquareListener(that.selectSquareListener.bind(that))
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
  }

  render () {
    return (
      <GameLayout size={this.state.size} players={this.state.players} select={this.selectSquare.bind(this)}></GameLayout>
    )
  }
}

export default GameContainer
