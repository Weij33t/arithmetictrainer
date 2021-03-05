import {
  TRAIN_SUM,
  TRAIN_MULT,
  TRAIN_SUB,
  TRAIN_DIV,
} from './MainSlide/redux/actionTypes'

const isAuth = !!localStorage.getItem('token')

const conf = {
  main: {
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
  },
  train: {
    title: 'Выберите операцию',
    name: 'train',
    controls: [
      { text: 'Сложение', action: TRAIN_SUM },
      { text: 'Умножение', action: TRAIN_MULT },
      { text: 'Вычитание', action: TRAIN_SUB },
      { text: 'Деление', action: TRAIN_DIV },
    ],
  },
  history: {
    title: 'Ваша история',
    name: 'history',
    controls: [
      { text: '1', action: TRAIN_SUM },
      { text: '2', action: TRAIN_MULT },
      { text: '3', action: TRAIN_SUB },
      { text: '4', action: TRAIN_DIV },
    ],
  },
  reg: {
    title: '',
    name: 'reg',
    controls: [
      { type: 'input', text: 'Nickname', action: 'REG_NAME' },
      { type: 'password', text: 'Password', action: 'REG_PASS' },
    ],
  },
}

export default conf
