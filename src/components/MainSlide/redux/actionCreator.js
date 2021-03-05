import { CHANGE_SLIDE } from './actionTypes'

export const changeSlide = (slideName) => {
  return {
    type: CHANGE_SLIDE,
    payload: slideName,
  }
}
