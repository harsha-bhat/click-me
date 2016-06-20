import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Header'
import GameContainer from './GameContainer'

class Layout extends React.Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className='layout'>
          <Header></Header>
          <GameContainer></GameContainer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Layout
