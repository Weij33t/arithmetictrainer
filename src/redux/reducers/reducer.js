import { combineReducers } from 'redux'
import slideReducer from '../../components/Slide/redux/reducer.js'

export default combineReducers({
  slide: slideReducer,
})
