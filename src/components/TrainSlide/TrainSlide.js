import React, { useState } from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import c from './TrainSlide.module.sass'
import slide from '../../styles/Slide.module.sass'
import btn from '../../styles/Button.module.sass'
import input from '../../styles/Input.module.sass'
import { NavLink } from 'react-router-dom'

import Button from './Button'
import Input from './Input'
import RandomTasks from './RandomTasks'

// какие числа
// сколько примеров
// сами примеры
// результаты

function TrainSlide(props) {
  const [trainConfig, setTrainConfig] = useState({
    difficulty: 'Легкий',
    type: null,
    count: 5,
    trainNumber: null,
    accuracy: 1,
    check: false,
  })
  const [tasks, setTasks] = useState([])
  const [slideIndex, changeSlide] = useState(0)
  const [btnActive, setBtnActive] = useState([btn.Active, '', ''])

  const types = ['Арифметика', 'Умножение', 'Деление']
  const typeBtns = types.map((type, i) => (
    <Button
      key={type + i}
      text={type}
      cls={btn.SlideButton}
      slideIndex={slideIndex}
      config={trainConfig}
      setTrainConfig={setTrainConfig}
      changeSlide={changeSlide}
    ></Button>
  ))

  const levels = ['Легкий', 'Средний', 'Сложный']
  const levelBtns = levels.map((level, i) => (
    <Button
      key={level + i}
      text={level}
      changeActive={btnClickHandler.bind(null, i)}
      cls={`${btn.SlideButton} ${btnActive[i]}`}
    />
  ))

  const inputs = [
    { ph: 'Количество примеров', dv: trainConfig.count },
    { ph: 'Число для тренировки', dv: trainConfig.trainNumber },
    { ph: 'Точность до знака после запятой', dv: trainConfig.accuracy },
  ]
  const inputTypes = inputs.map((inp, i) => (
    <div style={{ display: 'flex', flexDirection: 'column' }} key={inp.ph}>
      <span style={{ fontSize: '20px' }}>{inp.ph}</span>
      <Input
        cls={input.Input}
        ph={inp.ph}
        dv={inp.dv}
        type={i}
        setTrainConfig={setTrainConfig}
        trainConfig={trainConfig}
        changeSlide={changeSlide}
        slideIndex={slideIndex}
      />
    </div>
  ))

  function btnClickHandler(index) {
    const btnActive = ['', '', '']
    btnActive[index] = btn.Active
    setTrainConfig({ ...trainConfig, difficulty: levels[index] })
    setBtnActive(btnActive)
  }

  function getTasks(array) {
    setTasks(array)
  }

  console.log(tasks)

  return (
    <>
      <Carousel draggable={false} value={slideIndex}>
        <div
          className={`${slide.SlideContainer} ${slide.train} ${
            slide[props.type]
          }`}
        >
          <div className={slide.SlideInner}>
            <div className={slide.SlideTitle}>Выберите операцию</div>
            <div className={slide.SlideContent + ' ' + slide.train}>
              {typeBtns}
              <NavLink to="/">
                <button className={btn.SlideButton}>Главное меню</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className={`${slide.SlideContainer} ${slide.simple} ${
            slide[props.type]
          }`}
        >
          <div className={`${slide.SlideInner} ${slide.simple}`}>
            <div className={c.Container}>
              <div className={slide.SlideTitle}>Выберите режим</div>
              <div className={slide.SlideContent}>{levelBtns}</div>
            </div>
            <div className={c.Container}>
              <div className={slide.SlideTitle}>Сколько примеров</div>
              <div className={slide.SlideContent} style={{ height: '70%' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {trainConfig.type !== 'arithm'
                    ? inputTypes.slice(0, 2)
                    : inputTypes[0]}
                  {trainConfig.type === 'divide' ? inputTypes[2] : null}
                </div>
              </div>
            </div>
          </div>
          <Button
            cls={`${btn.SlideButton} ${btn.next}`}
            text="Далее"
            changeSlide={changeSlide}
            slideIndex={slideIndex}
          />
          <Button
            cls={`${btn.SlideButton} ${btn.back}`}
            text="Вернуться"
            changeSlide={changeSlide}
            slideIndex={slideIndex}
          />
        </div>
        {slideIndex >= 2 ? (
          <div
            className={`${slide.SlideContainer} ${slide.tasks} ${
              slide[props.type]
            }`}
          >
            <div className={`${slide.SlideInner} ${slide.tasks}`}>
              <div className={slide.SlideTitle}>Удачи!</div>
              <div className={slide.SlideContent}>
                <RandomTasks
                  {...trainConfig}
                  getTasks={getTasks}
                  tasks={tasks}
                  cls={`${btn.SlideButton} ${btn.check}`}
                  text="Проверить"
                  changeSlide={changeSlide}
                  slideIndex={slideIndex}
                />
              </div>
            </div>
          </div>
        ) : null}
        <div className={`${slide.SlideContainer} ${slide.results}`}>
          <div className={`${slide.SlideInner} ${slide.results}`}>
            <div className={slide.SlideTitle}>Результаты</div>
            <div className={slide.SlideContent}>
              <div className={c.Tasks}>
                {tasks.map((task, i) => {
                  return (
                    <div
                      key={task.task + i + task.userAnswer}
                      className={`${c.Task} ${
                        task.userAnswer === undefined ? c.Unanswered : ''
                      } ${
                        +task.userAnswer === +task.answer
                          ? c.Correct
                          : c.Incorrect
                      }  `}
                    >
                      <div>
                        Пример: <span>{task.task}</span>
                      </div>
                      <div className={``}>
                        Ваш ответ:{' '}
                        <span>{task.userAnswer ?? 'Нет ответа'}</span>
                      </div>
                      <div>
                        Правильный ответ: <span>{task.answer}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <NavLink to="/">
              <button className={btn.SlideButton}>В Главное меню</button>
            </NavLink>
          </div>
        </div>
      </Carousel>
    </>
  )
}

export default TrainSlide
