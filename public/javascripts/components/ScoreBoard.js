import React from 'react'
import {Card} from 'material-ui/Card'
import {CardText, CardTitle} from 'material-ui/Card'

class ScoreBoard extends React.Component {
  getScores (players) {
    let scores = players.map(function(player) {
      return (
        <CardText key={player._id}>
          <b>{player.name}</b> : {player.squares.length}
        </CardText>
      )
    })
    return scores
  }

  render () {
    let scores = this.getScores(this.props.players)
    return (
      <div className='scoreboard'>
        <Card className='scorecard' zDepth={2}>
          <CardTitle title='Scoreboard'/>
          {scores}
        </Card>
      </div>
    )
  }
}

export default ScoreBoard
