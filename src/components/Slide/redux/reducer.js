import { CHANGE_SLIDE } from './actionTypes'

const initialState = {
  type: 'main',
}

const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SLIDE:
      return { type: action.payload }

    default:
      return state
  }
}

export default slideReducer
