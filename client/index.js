import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers/combine_reducer_index'
import App from './components/app'


const loggerMiddleware = createLogger();

const store = applyMiddleware( promiseMiddleware, loggerMiddleware )( createStore )( rootReducer );


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector( '.main-container' )
);
