import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'

import './scss/header.scss'

import logo from './../../../assets/images/logo.png'

export default class Header extends Component {
  render () {
    return (
      <header id="header">

        <div className="col-3">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo"/>
          </Link>
        </div>
        <div className="col-9">

          <Menu />

        </div>

      </header>
    )
  }
}
