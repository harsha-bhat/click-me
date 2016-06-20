import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Layout from './components/Layout'

injectTapEventPlugin()

ReactDOM.render(
  <Layout></Layout>, document.getElementById('app'))
