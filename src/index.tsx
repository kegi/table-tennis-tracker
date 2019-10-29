import './../assets/scss'

import React from 'react'
import ReactDom from 'react-dom'
// import { Provider } from 'react-redux'
// import store from './store'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    <App/>,
    document.getElementById('app'),
  )
})

/*
<Provider store={store}>
  <App/>
</Provider>
*/
