import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";
const initialState = {
  tasks: [],
  listTask:[]
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: uuid(), text: action.payload });
      state.listTask=state.tasks;
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    filterTodo: (state,action)=>{
        if(action.payload.length === 0){
            state.listTask=state.tasks;
        }else{
            state.listTask= state.tasks.filter((task) =>action.payload.includes(task.text.optionValue))
        }
    },
    searchTodo: (state,action) =>{
            state.listTask= state.tasks.filter((task) => task.text.taskData.includes( action.payload))
    }
  },
});
export const getAllTask =(state) => state.todo.listTask;
export const { addTodo, deleteTodo,filterTodo,searchTodo } = todoSlice.actions;

export default todoSlice.reducer;
