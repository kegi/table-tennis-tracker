import React from 'react'
import Footer from './../'
import { mount } from 'enzyme'

describe('component:Footer', () => {
  it('render correctly', () => {
    const component = mount(
      <Footer/>
    )
    expect(component).toMatchSnapshot()
  })
})
