import { configureStore } from "@reduxjs/toolkit";

import { taskReducer } from "./slice/task";



export const store= configureStore ({
   reducer:{
    task: taskReducer
   }
    
});