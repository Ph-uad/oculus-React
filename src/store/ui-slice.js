import { createSlice } from "@reduxjs/toolkit";

const sidebar = false;

const uiSlice = createSlice({
    name: 'ui',
    initialState : sidebar,
    reducers :{
        toggleNotification : (state)=>{
         return !state
        }
    }
})


export const uiActions = uiSlice.actions
export default uiSlice