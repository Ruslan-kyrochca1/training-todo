import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import Todo from './Todo'
import { addTodo, fetchTodos } from '../store/slice/toDoSlice'
import { Task } from '../type/type'

const TodoList = () => {
    const [title, setTitle] = useState("")
    const {todos, isLoad, error} = useAppSelector(state => state.todo)
    const dispatch = useAppDispatch();

    const addTask = () => {
        const newTask: Task = {
            id: Date.now(),
            title: title,
            isCompleted: false
        }
        dispatch(addTodo(newTask))
    }

    useEffect(()=>{
        dispatch(fetchTodos());
    }, [dispatch]);

    if(isLoad) return <p>Загрузка данных</p>
    if(error) return <p>Error: {error}</p>


  return (
    <div>
        {todos.map(task => <Todo key={task.id} id = {task.id} title={task.title} isCompleted={task.isCompleted}/>)}
        <input type="text" 
            value={title}
            onChange={(e) => setTitle((e.target.value))}
        />
        <button
            onClick = {addTask}
        >Добавить</button>
    </div>
  )
}

export default TodoList