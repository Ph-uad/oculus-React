import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 0};

const bagSlice = createSlice({
    name : 'bag',
    initialState,
    reducers  : {
        increment: (state, action)=>{
           state.value += action.payload ;
        },
        derement : (state,actions)=>{
          state.value -=1;
        }
    }
})

export const bagActions = bagSlice.actions;
export default bagSlice



