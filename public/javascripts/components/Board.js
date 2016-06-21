import React from 'react'
import {Card} from 'material-ui/Card'
import {Grid, Row, Col} from 'react-bootstrap'

class Board extends React.Component {
  buttonClick(e) {
    var colColors = this.getColColors(this.props.players)
    if (!colColors[e.target.id]) {
      this.props.select(e.target.id)
    }
  }

  getColColors (players) {
    var colColors = {}
    players.forEach(function(player) {
      player.squares.forEach(function(sq) {
        colColors[sq] = player.color
      })
    })
    return colColors
  }

  renderGrid(size, players) {
    var colColors = this.getColColors(players)

    var rows = []
    var key = 1
    for (var i = 1; i <= size; i++) {
      var cols = []
      for (var j = 1; j <= size; j++) {
        if (colColors[key]) {
          cols.push(<Col key={key} md={3}><button id={key} onClick={this.buttonClick.bind(this)} className='boardbutton' style={{'backgroundColor':colColors[key]}}></button></Col>)
        } else {
          cols.push(<Col key={key} md={3}><button id={key} onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>)
        }
        key++
      }
      rows.push(<Row key={i} className='boardrow'>{cols}</Row>)
    }
    return(<Grid className='boardgrid'>{rows}</Grid>)
  }

  render () {
    return (
      <div className='board'>
        <Card className='boardcard' zDepth={2}>
          {this.renderGrid(this.props.size, this.props.players)}
        </Card>
      </div>
    )
  }
}

export default Board
