import React from 'react'
import {Card} from 'material-ui/Card'
import {CardText, CardTitle} from 'material-ui/Card'

class ScoreBoard extends React.Component {
  getScores (players) {
    let scores = players.map(function(player) {
      return (
        <div key={player._id}>
          <CardText>
            <button disabled={true} style={{backgroundColor: player.color, height:10, width:10, margin:10}}/>
            <b>{player.name}</b> : {player.squares.length}
          </CardText>
        </div>
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
