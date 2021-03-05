import * as actions from './actionTypes.js'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  isLogged: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case actions.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        isLogged: true,
      }
    case actions.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case actions.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        isLogged: false,
      }
    default:
      return state
  }
}

export default reducer
