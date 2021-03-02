import { createStore } from 'redux'
import reducers from '../reducers/reducer.js'

const store = createStore(reducers)

export default store
