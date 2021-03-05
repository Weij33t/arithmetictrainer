import axios from 'axios'

import * as type from './actionTypes.js'

export const authStart = () => {
  console.log('AUTHSTART')
  return {
    type: type.AUTH_START,
  }
}

export const authSuccess = (idToken, userId) => {
  return {
    type: type.AUTH_SUCCESS,
    idToken,
    userId,
  }
}

export const authFail = (error) => {
  return {
    type: type.AUTH_FAIL,
    error,
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout())
    }, expirationTime * 1000)
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expirationDate')
  localStorage.removeItem('userId')
  return {
    type: type.AUTH_LOGOUT,
  }
}

export const auth = (email, password, isSignUp) => {
  console.log('AUTH')
  return (dispatch) => {
    dispatch(authStart())
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC53hZkSkfPUMqh9DGlH0KSfZ2qw0kBy_Y'
    if (isSignUp) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC53hZkSkfPUMqh9DGlH0KSfZ2qw0kBy_Y'
    }
    const authData = {
      email,
      password,
      returnSecureToken: true,
    }
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response)
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        )
        dispatch(authSuccess(response.data.idToken, response.data.localId))
        dispatch(checkAuthTimeout(response.data.expiresIn))
        localStorage.setItem('token', response.data.idToken)
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem('userId', response.data.localId)
      })
      .catch((error) => {
        console.log(error.response.data.error.message)
        dispatch(authFail(error))
      })
  }
}

export const checkAuthState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(logout())
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      if (expirationDate > new Date()) {
        const userId = localStorage.getItem('userId')
        dispatch(authSuccess(token, userId))
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        )
      } else {
        dispatch(logout())
      }
    }
  }
}
