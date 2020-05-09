import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducers/rootReducer'
import TodoApp from './Components/TodoApp'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export const App = () =>
  <Provider store={store}>
    <TodoApp />
  </Provider>

