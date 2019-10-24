import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message as MessageInterface } from '../../../store/chat/types'
import { deleteMessage } from '../../../store/chat/actions'

interface MessageProps extends MessageInterface {
  deleteMessage: typeof deleteMessage
}

class Message extends Component<MessageProps, {}> {
  constructor (props: any) {
    super(props)
    this.deleteMessage = this.deleteMessage.bind(this)
  }

  private formatDate (timestamp: number) {
    const date = new Date(timestamp)
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec']
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()

    return `${day} ${month} ${year} ${hour}:${min}:${sec}`
  }

  deleteMessage () {
    this.props.deleteMessage(this.props.timestamp)
  }

  render () {
    return <li>
      <strong title={this.formatDate(this.props.timestamp)}>
        {this.props.user}
      </strong> : {this.props.message}
      {' '}
      <button
        className="btn btn-sm btn-danger"
        onClick={this.deleteMessage}
      >
        X
      </button>
    </li>
  }
}

export default connect(
  null,
  {
    deleteMessage
  }
)(Message)
