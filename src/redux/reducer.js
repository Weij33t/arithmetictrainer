import { combineReducers } from 'redux'
import authReducer from '../components/Auth/redux/reducer.js'
import slideReducer from '../components/MainSlide/redux/reducer.js'

export default combineReducers({
  slide: slideReducer,
  auth: authReducer,
})
