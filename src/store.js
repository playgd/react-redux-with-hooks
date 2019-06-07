import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}

const mainReducer = (state = {}, action) => {
  return {
    counter: counter(state.counter, action)
  }
}

const store = createStore(mainReducer)

export { store }
