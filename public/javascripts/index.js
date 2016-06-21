import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Layout from './components/Layout'
import GameContainer from './components/GameContainer'
import Login from './components/Login'
import ListingContainer from './components/ListingContainer'

injectTapEventPlugin()

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={ListingContainer} />
      <Route path='/game' component={GameContainer} />
      <Route path='/login' component={Login} />
    </Route>
  </Router>, document.getElementById('app'))
