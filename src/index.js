import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css/normalize.css'
import 'milligram/dist/milligram.css'
import 'font-awesome/css/font-awesome.css'
import './css/app.css'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
