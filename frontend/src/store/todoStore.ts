import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from '../type/TodoType';
import { RootState } from './store';

type Generation = {
    todoList: Array<TodoType>
}

const initialState: Generation = {
    todoList: new Array<TodoType>()
}

export const generationSlice = createSlice({
    name: 'todoStore',
    initialState,
    reducers: {
        changeGeneration: (state, action) => {
            state.todoList = action.payload;
        },
        addGeneration: (state, action: PayloadAction<TodoType>) => {
            state.todoList.unshift(action.payload);
        },
        doneGeneration: (state, action: PayloadAction<string>) => {
            const targetTodo = state.todoList.find(value => action.payload === value.id);
            if (targetTodo === undefined) {
                console.error("undefined todo");
                return;
            }
            targetTodo.isDone = !targetTodo?.isDone;
        },
        deleteGeneration: (state, action: PayloadAction<string>) => {
            state.todoList = state.todoList.filter(value => action.payload !== value.id);
        }
    },
})

// change
export const {
    changeGeneration: changeTodo,
    addGeneration: addTodo,
    doneGeneration: doneTodo,
    deleteGeneration: deleteTodo,
} = generationSlice.actions;

// get
export const getTodos = (state: RootState) => state.todoReducer.todoList;

export default generationSlice.reducer
