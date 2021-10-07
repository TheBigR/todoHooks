import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions'

const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState(todo.name)
  let dispatch = useDispatch()
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>#{todo.id}</div>
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              placeholder={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h4>{todo.name} </h4>
          )}
        </div>
        <button
          className="btn btn-primary m-2"
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
          className="btn btn-danger m-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
