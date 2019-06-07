import { useState, useEffect, useCallback } from 'react'

export const createReactRedux = (store) => (mapState, mapDispatch) => {
  const getState = useCallback(
    () => mapState ? mapState(store.getState()) : store.getState(),
    [mapState]
  )
  const [state, setState] = useState(() => getState())

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(getState())
    })

    return () => unsubscribe()
  }, [getState])

  return [
    state,
    mapDispatch ? mapDispatch(store.dispatch) : store.dispatch
  ]
}
