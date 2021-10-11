import React, { useState } from 'react'
import { addTodo } from '../redux/actions'
import { v1 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'

function TodoInput() {
  let [name, setName] = useState()
  let dispatch = useDispatch()
  return (
    <div>
      <div className="ui center aligned basic segment">
        <div className="ui left icon action input">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
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
            className="ui blue submit button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoInput
