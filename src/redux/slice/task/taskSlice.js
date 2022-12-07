//crud

import { createSlice } from "@reduxjs/toolkit";


export const taskSlice= createSlice({
    name:'tasks',
    initialState:[],
    reducers: {
        createUser: (state, action) => {
          return action.payload;
        },
        modifyUser: (state, action) => {
          const formattedData = { ...state, ...action.payload };
          return formattedData;
        }
      
      }

});

export default taskSlice.reducer;