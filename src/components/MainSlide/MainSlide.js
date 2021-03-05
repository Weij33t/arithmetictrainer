import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { changeSlide } from './redux/actionCreator'

import c from '../../styles/Slide.module.sass'
import btn from '../../styles/Button.module.sass'
import { logout } from '../Auth/redux/actionCreator'

const Slide = (props) => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isLogged)
  const config = {
    title: 'Главное меню',
    name: 'main',
    controls: [
      { text: 'Тренировка', name: 'train' },
      { text: 'Моя история', name: 'history' },
      {
        text: !isAuth ? 'Регистрация' : 'Выйти',
        name: !isAuth ? 'reg' : 'logout',
      },
      { text: 'О тренажере', name: 'about' },
    ],
  }
  const clickHandler = (name) => {
    if (name === 'logout') {
      dispatch(logout())
      return
    }
    dispatch(changeSlide(name))
  }
  return (
    <div className={`${c.SlideContainer + ' ' + c[props.type]}`}>
      <div className={c.SlideInner}>
        <div className={c.SlideTitle}>{config.title}</div>
        <div className={c.SlideContent}>
          {config.controls.map((control) => (
            <NavLink
              to={`/${control.name === 'logout' ? '' : control.name}`}
              key={props.type + control.text}
            >
              <button
                className={btn.SlideButton}
                onClick={() => clickHandler(control.name)}
                type={props.type}
              >
                {control.text}{' '}
              </button>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slide
