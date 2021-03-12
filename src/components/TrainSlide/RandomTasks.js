import React from 'react'

import input from '../../styles/Input.module.sass'
import Button from './Button'
function RandomTasks(props) {
  const operations = {
    arithm: '+-',
    mult: '*',
    divide: '/',
  }
  let levels = {
    Легкий: {
      arithm: [3, 28],
      mult: [2, 10],
      divide: [2, 10],
    },
    Средний: {
      arithm: [100, 1000],
      mult: [2, 20],
      divide: [2, 20],
    },
    Сложный: {
      arithm: [100, 10000],
      mult: [2, 250],
      divide: [2, 250],
    },
  }

  if (props.trainNumber !== null && props.trainNumber > 0) {
    levels = {
      Легкий: {
        mult: [2, 50],
        divide: [2, 50],
      },
      Средний: {
        mult: [2, 1000],
        divide: [2, 1000],
      },
      Сложный: {
        mult: [100, 10000],
        divide: [100, 10000],
      },
    }
  }

  const tasks = []
  const operation = operations[props.type]
  const difficult = levels[props.difficulty]

  function addUsersAnswer(userAnswer, inputId) {
    tasks[inputId] = { ...tasks[inputId], userAnswer }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  function getAnswer(first, second, sign) {
    switch (sign) {
      case '/':
        return (first / second).toFixed(props.accuracy)

      case '*':
        return first * second

      case '+':
        return first + second

      case '-':
        return first - second
    }
  }

  const generateTask = (operation, [min, max], trainNumber = null) => {
    const sign =
      operation.length === 2 ? operation[Math.round(Math.random())] : operation

    const first = getRandomInt(min, max)
    const second = trainNumber ?? getRandomInt(min, max)
    const task = `${first} ${sign} ${second}`
    const answer = getAnswer(first, second, sign)
    return [task, answer]
  }

  for (let i = 0; i < props.count; i++) {
    const [task, answer] = generateTask(
      operation,
      difficult[props.type],
      props.trainNumber
    )
    tasks[i] = {
      task,
      answer,
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {tasks.map((task, i) => (
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          key={task.task + i}
        >
          <div style={{ fontSize: '22px', minWidth: '200px', width: 'auto' }}>
            {task.task} =
          </div>
          <input
            type="number"
            placeholder="Ваш ответ"
            className={input.Input}
            onChange={(e) => addUsersAnswer(e.target.value, i)}
          />
        </div>
      ))}
      <Button
        cls={props.cls}
        text={props.text}
        changeSlide={props.changeSlide}
        slideIndex={props.slideIndex}
        getTasks={props.getTasks.bind(this, tasks)}
      />
    </div>
  )
}

export default RandomTasks
