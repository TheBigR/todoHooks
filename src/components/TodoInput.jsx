import React, { useState } from 'react'
import { addTodo } from '../redux/actions'
import { v1 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'

function TodoInput() {
  let [name, setName] = useState()
  let dispatch = useDispatch()
  return (
    <div>
      <h3> TodoInput </h3>
      <div className="row m-2"></div>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        className="col form-control"
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              id: uuid(),
              name,
            }),
          )
          setName('')
        }}
        className="col btn btn-primary m-2"
      >
        Add
      </button>
    </div>
  )
}

export default TodoInput
