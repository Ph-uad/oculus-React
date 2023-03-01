import { createSlice } from "@reduxjs/toolkit";



const notification = null;

const uiSlice = createSlice({
    name: 'ui',
    initialState : notification,
    reducers :{
        showNotification : (state, action)=>{
            
        }
    }
})


export const uiActions = uiSlice.actions
export default uiSlice