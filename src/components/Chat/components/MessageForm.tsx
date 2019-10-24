import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../../store/chat/actions'

interface MessageFormProps {
  sendMessage: typeof sendMessage
}

interface MessageFormState {
  message: string
}

class MessageForm extends Component<MessageFormProps, MessageFormState> {
  constructor (props: any) {
    super(props)
    this.state = {
      message: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event: any) {
    this.setState({
      message: event.target.value
    })
  }

  onSubmit (event: any) {
    event.preventDefault()

    this.props.sendMessage({
      user: 'Kevin',
      message: this.state.message,
      timestamp: Date.now()
    })

    this.setState({ message: '' })
  }

  render () {
    return <form>

      <div className="row">
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            value={this.state.message}
            onChange={this.onChange}
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="SEND"
            onClick={this.onSubmit}
          />
        </div>
      </div>

    </form>
  }
}

export default connect(null, {
  sendMessage
})(MessageForm)
