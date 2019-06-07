import { createReactRedux } from './create-react-redux'
import { store } from '../store'

export const useRedux = createReactRedux(store)
