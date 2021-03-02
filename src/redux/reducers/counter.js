const initialState = {
  value: 0,
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + action.number }
    default:
      return state
  }
}

// export const counter = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// console.log('NF OW:FOWE:WEIF ', counter)
// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counter.actions

// export default counter.reducer
