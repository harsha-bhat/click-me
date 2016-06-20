import React from 'react'
import {Card} from 'material-ui/Card'
import {Grid, Row, Col} from 'react-bootstrap'

class Board extends React.Component {
  buttonClick(e) {
    console.log(e.target.id)
    e.target.className = 'boardbutton done'
    this.props.select(e.target.id)
  }

  renderBoard(size) {
    for (var i = 1; i <= size; i++) {
      for (var j = 1; j <= size; j++) {

      }
    }
  }

  render () {
    return (
      <div className='board'>
        <Card className='boardcard' zDepth={2}>
          <Grid className='boardgrid'>
            <Row className='boardrow'>
              <Col md={3}><button id='1' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='2' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='3' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='4' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
            </Row>
            <Row className='boardrow'>
              <Col md={3}><button id='5' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='6' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='7' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='8' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
            </Row>
            <Row className='boardrow'>
              <Col md={3}><button id='9' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='10' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='11' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='12' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
            </Row>
            <Row className='boardrow'>
              <Col md={3}><button id='13' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='14' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='15' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
              <Col md={3}><button id='16' onClick={this.buttonClick.bind(this)} className='boardbutton'></button></Col>
            </Row>
          </Grid>
        </Card>
      </div>
    )
  }
}

export default Board
