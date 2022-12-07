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
        modifyTask: (state, action) => {
         // const formattedData = { ...state, ...action.payload };
     //console.log(formattedData)
     const {id, title, description}= action.payload;
     const foundTask= state.find(task=> task.id=== id);

     if(foundTask){
      foundTask.title= title;
      foundTask.description=description;
     }
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
export const { createTask, modifyTask, deleteTask}= taskSlice.actions
export default taskSlice.reducer;