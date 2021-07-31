import React from 'react'
import ReactDOM from 'react-dom'
import { DefaultTypelessProvider } from 'typeless';
import './index.css'
import App from './App'

ReactDOM.render(
  <DefaultTypelessProvider>
    <App />
  </DefaultTypelessProvider>,
  document.getElementById('root')
)
