import React from 'react'
import { Task } from '../type/type'

const Todo: React.FC = ({id, title, isCompleted}:Task) => {
  return (
    <div>
        {title}
        {isCompleted}
    </div>
  )
}

export default Todo