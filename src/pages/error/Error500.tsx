import React, { Component } from 'react'

export interface Page500State {
  error?: Error,
  info: {
    componentStack: string
  }
}

export default class Page500 extends Component<{}, Page500State> {
  constructor (props: []) {
    super(props)

    this.state = {
      error: undefined,
      info: {
        componentStack: ''
      }
    }
  }

  /**
   * When an error occured
   *
   * @param {string} error
   * @param {{componentStack: string}} info
   */
  componentDidCatch (error: Error, info: { componentStack: string }) {
    this.setState({
      error,
      info
    })
  }

  render () {
    if (!this.state.error) {
      return this.props.children
    }

    let detail: JSX.Element

    if (process.env.NODE_ENV === 'development') {
      console.log('>>>')
      console.log(this.state.error.toString())
      console.log(this.state.info.componentStack)
      console.log('<<<')

      detail = (<div className="alert alert-danger">
        Error : <strong>{this.state.error.toString()}</strong>
        <hr/>
        <pre>{this.state.info.componentStack}</pre>
      </div>)
    } else {
      detail =
        <div className="alert alert-danger">
          An error occured, please try again later
        </div>
    }

    return (
      <>
        <h1>Error 500</h1>
        {detail}
      </>
    )
  }
}
