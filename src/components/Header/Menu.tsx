import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  render () {
    return (
      <nav id="header-menu">

        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              homepage
            </NavLink>
          </li>

          <li>
            <NavLink to="/page-1" exact={true} activeClassName="active">
              static page
            </NavLink>
          </li>

          <li>
            <NavLink to="/redux" exact={true} activeClassName="active">
              Redux example
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/i-do-not-exists"
              exact={true}
              activeClassName="active"
            >
              missing page
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/error"
              exact={true}
              activeClassName="active"
              style={{ color: '#760000' }}
            >
              Test error
            </NavLink>
          </li>

        </ul>

      </nav>
    )
  }
}
