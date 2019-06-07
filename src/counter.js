import React from 'react'
import { useRedux } from './hooks'

const Counter = () => {
  const [counter, { increment, decrement }] = useRedux(mapState, mapDispatch)
  return (
    <>
      <h1>
        {counter}
      </h1>

      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

const mapState = (state) => state.counter
const mapDispatch = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT'})
})

export default Counter
