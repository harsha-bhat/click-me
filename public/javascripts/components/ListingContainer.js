import React from 'react'
import Listing from './Listing'

class ListingContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      games: []
    }
  }

  componentDidMount () {
    fetch('/games')
    .then(function(res) {
      return res.json();
    }).then((function(json) {
      this.setState({games: json})
    }).bind(this))
  }

  render () {
    return (
      <Listing games={this.state.games}></Listing>
    )
  }
}

export default ListingContainer
