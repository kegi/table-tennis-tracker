import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import * as pages from './pages'

export default class App extends Component {
  constructor (props: []) {
    super(props)

    this.state = {
      locale: null
    }
  }

  render () {
    return (

      <div className="container-fluid" id="container">
        <Header/>

        <main id="main">

          <pages.Error500>

            <Switch>

              <Route exact path="/" render={() => (
                <pages.Homepage/>
              )}/>

              <Route exact path="/page-1" render={() => (
                <pages.Page1/>
              )}/>

              <Route exact path="/redux" render={() => (
                <pages.Redux/>
              )}/>

              <Route exact path="/error" render={() => {
                throw new Error('I am an error ! change url and reload.')
              }}/>

              <Route render={() => (<pages.Error404/>)}/>
            </Switch>
          </pages.Error500>

        </main>

        <Footer/>

      </div>
    )
  }
};
