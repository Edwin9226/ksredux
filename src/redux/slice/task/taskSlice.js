//crud

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
    description: "This is a task",
  },
  {
    id: "2",
    title: "Task 2",
    completed: false,
    description: "This is a task",
  },
];

export const taskSlice= createSlice({
    name:'tasks',
    initialState:initialState,
    reducers: {
        createTask: (state, action) => {
          console.log(action)
          state.push(action.payload)
          //return action.payload;
        },
        modifyUser: (state, action) => {
          const formattedData = { ...state, ...action.payload };
          return formattedData;
        },
        deleteTask:(state, action)=>{
          const taskFound= state.find(task=> task.id=== action.payload)
          if(taskFound){
            state.splice(state.indexOf(taskFound),1)
          }
          //console.log(action)

        }
      
      }

});
export const { createTask, modifyUser, deleteTask}= taskSlice.actions
export default taskSlice.reducer;