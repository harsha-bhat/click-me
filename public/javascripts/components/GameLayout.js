import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Board from './Board'
import ScoreBoard from './ScoreBoard'

class GameLayout extends React.Component {
  render () {
    return (
      <div className='gamelayout'>
        <Grid>
          <Row>
            <Col md={9}>
              <Board size={this.props.size} players={this.props.players} select={this.props.select}></Board>
            </Col>
            <Col md={3}>
              <ScoreBoard title='Scoreboard' players={this.props.players}></ScoreBoard>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default GameLayout
