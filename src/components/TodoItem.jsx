import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions'

const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState(todo.name)
  let dispatch = useDispatch()
  return (
    <div className="ui eight relaxed column grid">
      <div className="row">
        <div className="column ">#{todo.id}</div>
        <div className="column">
          {editable ? (
            <input
              type="text"
              className="ui big icon input"
              placeholder={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h4>{todo.name} </h4>
          )}
        </div>
        <button
          className="ui primary button "
          onClick={() => {
            if (editable) {
              dispatch(updateTodo({ ...todo, name }))
              setName(todo.name)
            }
            setEditable(!editable)
          }}
        >
          {editable ? 'Update' : 'Edit'}
        </button>
        <button
          className="ui button red "
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
