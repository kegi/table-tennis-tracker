import React, { Component } from 'react'

import MessagesList from './components/MessagesList'
import MessageForm from './components/MessageForm'

export default class Chat extends Component {
  render () {
    return (<>
      <MessagesList/>
      <MessageForm/>
    </>)
  }
}
