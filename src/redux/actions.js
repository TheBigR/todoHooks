import * as actions from './actionTypes'

export function addTodo(todo) {
  return {
    type: actions.ADD_TODO,
    payload: todo,
  }
}

export function deleteTodo(todoId) {
  return {
    type: actions.DELETE_TODO,
    payload: todoId,
  }
}

export function updateTodo(todo) {
  return {
    type: actions.UPDATE_TODO,
    payload: todo,
  }
}
