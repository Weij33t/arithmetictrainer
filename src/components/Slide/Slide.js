import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  TRAIN_SUM,
  TRAIN_MULT,
  TRAIN_SUB,
  TRAIN_DIV,
} from './redux/actionTypes'
import { changeSlide } from './redux/actionCreator'

import c from './Slide.module.sass'
import config from './config.js'

const Slide = (props) => {
  const slideType = useSelector((state) => state.slide.type)
  console.log(slideType)
  const dispatch = useDispatch()
  const backButton =
    props.type === 'main' ? null : <div className={c.SlideBottom}>bottom</div>
  const slideConf = config[props.type]
  const additionalClass = slideConf.name

  return (
    <div className={`${c.SlideContainer} ${c[additionalClass]}`}>
      <div className={c.SlideInner}>
        <div className={c.SlideTitle}>{config[props.type].title}</div>
        <div className={c.SlideContent + ' ' + c[additionalClass]}>
          {slideConf.buttons.map((btn) => (
            <button
              key={props.type + btn.text}
              className={c.SlideButton + ' ' + c.Slide + props.type}
              onClick={() => dispatch(changeSlide(btn.name))}
            >
              {btn.text}
            </button>
          ))}
        </div>
        {backButton}
      </div>
    </div>
  )
}

export default Slide
