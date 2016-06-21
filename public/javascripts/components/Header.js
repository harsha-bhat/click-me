import React from 'react'
import AppBar from 'material-ui/AppBar'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <AppBar title='Click Me' zDepth={2} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1101
        }} showMenuIconButton={false}/>} />
      </div>
    )
  }
}

export default Header
