import React, { useState } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import c from '../../styles/Slide.module.sass'
import btn from '../../styles/Button.module.sass'

// какие числа
// сколько примеров
// сколько знаков
// сами примеры
// результаты

function TrainSlide(props) {
  const [operation, setOperation] = useState(null)

  return (
    <Carousel draggable={false} value={1}>
      <div className={`${c.SlideContainer + ' ' + c[props.type]}`}>
        <div className={c.SlideInner}>
          <div className={c.SlideTitle}>{1}</div>
          <div className={c.SlideContent}></div>
        </div>
        <button className={btn.SlideButton}>Вернуться</button>
      </div>
      <div className={`${c.SlideContainer + ' ' + c[props.type]}`}>
        <div className={c.SlideInner}>
          <div className={c.SlideTitle}>{2}</div>
          <div className={c.SlideContent}></div>
        </div>
        <button className={btn.SlideButton}>Вернуться</button>
      </div>
    </Carousel>
  )
}

export default TrainSlide
