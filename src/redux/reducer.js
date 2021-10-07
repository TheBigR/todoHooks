import * as actions from './actionTypes'
import { todos } from './states'

export let reducer = (state = todos, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, action.payload]
    case actions.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)
    case actions.UPDATE_TODO:
      return state.map((todo) =>
        todo.id !== action.payload.id
          ? todo
          : { ...todo, name: action.payload.name },
      )
    default:
      return state
  }
}
