import React from 'react'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Listing extends React.Component {
  constructor () {
      super()
      this.state = {
        open: false,
        join: false,
        size: 4,
        maxPlayers: 4,
        name: ''
      }
  }

  handleOpen () {
    this.setState({open: true})
  }

  handleClose () {
    this.setState({open: false})
  }

  handleSizeChange (event, index, value) {
    this.setState({size: value})
  }

  handleMaxPlayerChange (event, index, value) {
    this.setState({maxPlayers: value})
  }

  handleJoinOpen () {
    this.setState({join: true})
  }

  handleJoinClose () {
    this.setState({join: false})
  }

  handleNameChange (e) {
    this.setState({name: e.target.value})
  }

  renderListItems (games, click) {
    var listItems = []
    games.forEach(function(game) {
      listItems.push(<ListItem key={game._id}
                                primaryText={game.title + ' - ' + game.size + ' x ' + game.size}
                                secondaryText={game.players.length + '/' + game.maxPlayers + ' Players'}
                                onTouchTap={click}
                                />)
    })
    return listItems
  }

  render () {
    const actions = [
     <FlatButton
       label="Cancel"
       primary={true}
       onTouchTap={this.handleClose.bind(this)}
     />,
     <FlatButton
       label="Submit"
       primary={true}
       keyboardFocused={true}
       onTouchTap={this.handleClose.bind(this)}
     />,
   ];

   const joinActions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleJoinClose.bind(this)}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={this.handleJoinClose.bind(this)}
    />,
  ];

    return (
      <div className='listing'>
        <Paper zDepth={2}>
          <List>
              <Subheader>Games In Progress</Subheader>
              {this.renderListItems(this.props.games, this.handleJoinOpen.bind(this))}
              <Divider />
              <ListItem id={'new'} primaryText="Create New" onTouchTap={this.handleOpen.bind(this)} leftIcon={
                  <ContentAdd />
              }/>
          </List>
        </Paper>
        <Dialog
          title="Create New Game"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
        >
        <TextField hintText="Enter Your Name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
        <br />
        <SelectField
          value={this.state.size}
          onChange={this.handleSizeChange.bind(this)}
          floatingLabelText="Size"
          floatingLabelFixed={true}
        >
          <MenuItem value={3} primaryText="3 x 3" />
          <MenuItem value={4} primaryText="4 x 4" />
          <MenuItem value={5} primaryText="5 x 5" />
        </SelectField>
        <br />
        <SelectField
          value={this.state.maxPlayers}
          onChange={this.handleMaxPlayerChange.bind(this)}
          floatingLabelText="Maximum Players"
          floatingLabelFixed={true}
        >
          <MenuItem value={2} primaryText="2 Players" />
          <MenuItem value={3} primaryText="3 Players" />
          <MenuItem value={4} primaryText="4 Players" />
          <MenuItem value={5} primaryText="5 Players" />
          <MenuItem value={6} primaryText="6 Players" />
        </SelectField>
        </Dialog>
        <Dialog
          title="Join Game"
          actions={joinActions}
          modal={false}
          open={this.state.join}
          onRequestClose={this.handleJoinClose.bind(this)}
        >
          <TextField hintText="Enter Your Name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
      </Dialog>
      </div>
    )
  }
}

export default Listing
