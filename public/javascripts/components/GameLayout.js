import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Board from './Board'
import ScoreBoard from './ScoreBoard'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class GameLayout extends React.Component {
  render () {
    const actions = [
     <FlatButton
       label="OK"
       primary={true}
       keyboardFocused={true}
       onTouchTap={this.props.closeModal}
     />
   ];

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
        <Dialog
          title="Game Over"
          actions={actions}
          modal={true}
          open={this.props.modalOpen}
        >
        <h3>{this.props.winner} Wins!</h3>
        </Dialog>
      </div>
    )
  }
}

export default GameLayout
