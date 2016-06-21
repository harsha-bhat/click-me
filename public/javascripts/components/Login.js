import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

class Login extends React.Component {
  render () {
    return (
      <Paper zDepth={2} className='login'>
          <TextField hintText="Enter Your Name" className='form-elem'/>
          <RaisedButton label='Submit' primary={true} className='form-elem'/>
      </Paper>
    )
  }
}

export default Login
