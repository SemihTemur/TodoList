import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "./types/Types";

const initialState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: ",todo",
  initialState,
  reducers: {
    addTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodoById: (
      state: TodoInitialState,
      action: PayloadAction<number>
    ) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    updateTodoById: (
      state: TodoInitialState,
      action: PayloadAction<TodoType>
    ) => {
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload.id ? action.payload : todo
      );
    },
  },
});

export const { addTodo, deleteTodoById, updateTodoById } = todoSlice.actions;

export default todoSlice.reducer;
