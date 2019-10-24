import React from 'react'
import Header from './../'
import { BrowserRouter } from 'react-router-dom'
import { mount } from 'enzyme'

describe('component:Header', () => {
  it('render correctly', () => {
    const component = mount(
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    )
    expect(component).toMatchSnapshot()
  })
})
