import React from 'react'

function Input({
  type,
  dv,
  ph,
  cls,
  changeSlide,
  slideIndex,
  setTrainConfig,
  trainConfig,
}) {
  const keyHandler = (e) => {
    if (type === 0) {
      setTrainConfig({ ...trainConfig, count: Math.abs(+e.target.value) })
    } else if (type == 1) {
      setTrainConfig({ ...trainConfig, trainNumber: Math.abs(+e.target.value) })
    } else {
      setTrainConfig({ ...trainConfig, accuracy: Math.abs(+e.target.value) })
    }

    if (e.key === 'Enter') {
      changeSlide(slideIndex + 1)
    }
  }

  return (
    <input
      type="number"
      defaultValue={dv}
      placeholder={ph}
      className={cls}
      onKeyPress={keyHandler}
      onChange={keyHandler}
    />
  )
}

export default Input
