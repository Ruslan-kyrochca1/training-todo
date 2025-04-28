import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../type/type";

interface TaskState{
    todos: Task[],
    // isLoad: boolean,
    // isError: boolean,
}

const initialState: TaskState = {
    todos: [{
        id: 1,
        title: "Название",
        isCompleted: false
    }],
    // isLoad: false,
    // isError: false
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Task>){
            state.todos.push(action.payload);
        },
        deleteTodo(state, action: PayloadAction<number>){
            state.todos.filter((elem) => elem.id !== action.payload)
        },
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;