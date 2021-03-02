import {
  TRAIN_SUM,
  TRAIN_MULT,
  TRAIN_SUB,
  TRAIN_DIV,
} from './redux/actionTypes'

const conf = {
  main: {
    title: 'Главное меню',
    name: 'main',
    buttons: [
      { text: 'Тренировка', name: 'train' },
      { text: 'Моя история', name: 'history' },
      { text: 'Регистрация', name: 'reg' },
      { text: 'О тренажере', name: 'about' },
    ],
  },
  train: {
    title: 'Выберите операцию',
    name: 'train',
    buttons: [
      { text: 'Сложение', action: TRAIN_SUM },
      { text: 'Умножение', action: TRAIN_MULT },
      { text: 'Вычитание', action: TRAIN_SUB },
      { text: 'Деление', action: TRAIN_DIV },
    ],
  },
  history: {
    title: 'Ваша история',
    name: 'history',
    buttons: [
      { text: '1', action: TRAIN_SUM },
      { text: '2', action: TRAIN_MULT },
      { text: '3', action: TRAIN_SUB },
      { text: '4', action: TRAIN_DIV },
    ],
  },
}

export default conf
