import React from 'react'
import { Task } from '../type/type'

const Todo: React.FC<Task> = ({id, title, isCompleted}) => {
  return (
    <div>
        {title}
        {isCompleted? '✅' : '❌'}
    </div>
  )
}

export default Todo