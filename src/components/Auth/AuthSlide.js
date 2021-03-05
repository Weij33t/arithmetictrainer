import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actions from './redux/actionCreator.js'
import input from '../../styles/Input.module.sass'
import btn from '../../styles/Button.module.sass'
import c from '../../styles/Slide.module.sass'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const innerSlideStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

export default function AuthSlide() {
  const dispatch = useDispatch()
  const [inputs, inputsHandler] = useState({
    email: '',
    pass: '',
  })

  const isAuth = useSelector((state) => state.auth.isLogged)

  const [isSignUp, signUpHandler] = useState(true)

  const authHandler = (event) => {
    event.preventDefault()
    dispatch(actions.auth(inputs.email, inputs.pass, isSignUp))
  }
  return (
    <div className={c.SlideContainer}>
      {isAuth ? <Redirect to="/" /> : ''}
      <div className={c.SlideInner} style={innerSlideStyle}>
        <div className={c.SlideTitle}>Вход в систему</div>
        <form style={styles} onSubmit={(e) => authHandler(e)}>
          <input
            className={input.Input}
            type="email"
            placeholder="Ваш email"
            onChange={(e) =>
              inputsHandler({ ...inputs, email: e.target.value })
            }
          />
          <input
            className={input.Input}
            type="password"
            placeholder="Придумайте пароль"
            onChange={(e) => inputsHandler({ ...inputs, pass: e.target.value })}
          />
          <button
            className={btn.SlideButton}
            onClick={() => signUpHandler(true)}
          >
            Войти
          </button>
          <button
            className={btn.SlideButton}
            onClick={() => signUpHandler(false)}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  )
}
