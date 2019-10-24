import React, { Component } from 'react'
import { connect } from 'react-redux'

import { AppState } from '../../../store'
import { Message as MessageProps } from '../../../store/chat/types'
import Message from './Message'

interface MessagesListProps {
  messages: MessageProps[]
}

class MessagesList extends Component<MessagesListProps, {}> {
  render () {
    return <div style={{
      border: 'solid 1px #000',
      height: 350,
      padding: 10,
      overflow: 'scroll'
    }}>
      <ul>
        {this.props.messages.map((message) => (
          <Message key={message.timestamp} {...message}/>
        ))}
      </ul>
    </div>
  }
}

export default connect((state: AppState) => {
  return {
    messages: state.chat.messages
  }
})(MessagesList)
