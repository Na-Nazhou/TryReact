import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Reducers/rootReducer'
import TodoApp from './Components/TodoApp'

const store = createStore(rootReducer)

export const App = () =>
  <Provider store={store}>
    <TodoApp />
  </Provider>

