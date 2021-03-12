import React from 'react'

function Button({
  cls,
  changeSlide,
  text,
  slideIndex,
  config,
  setTrainConfig,
  changeActive,
  getTasks,
}) {
  const clickHandler = () => {
    if (changeSlide !== undefined) changeSlide(slideIndex + 1)
    if (text === 'Вернуться') {
      changeSlide(slideIndex - 1)
      return
    } else if (text === 'Далее') {
      changeSlide(slideIndex + 1)
      return
    } else if (text === 'Проверить') {
      changeSlide(slideIndex + 1)
      getTasks()
      return
    }
    if (text === 'Арифметика') {
      setTrainConfig({ ...config, type: 'arithm' })
    } else if (text === 'Умножение') {
      setTrainConfig({ ...config, type: 'mult' })
    } else if (text === 'Деление') {
      setTrainConfig({ ...config, type: 'divide' })
    } else {
      changeActive()
    }
  }
  return (
    <button className={cls} onClick={clickHandler}>
      {text}
    </button>
  )
}

export default Button
