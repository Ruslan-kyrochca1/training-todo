import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../type/type";
import axios from "axios";
import { act } from "react";

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        return response.data;
    }
)

interface TaskState{
    todos: Task[];
    isLoad: boolean;
    error: string | null;
}

const initialState: TaskState = {
    todos: [],
    isLoad: false,
    error: null,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.isLoad = true;
                state.error = null
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoad = false;
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.isLoad = false;
                state.error = action.error.message || "Ошибка загрузки";
            })
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;