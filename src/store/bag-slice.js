import { createSlice } from "@reduxjs/toolkit";

const initialState = {bag: []};

const bagSlice = createSlice({
    name : 'bag',
    initialState,
    reducers  : {
        addToBag: (state, action)=>{
          state.bag.filter((value) =>{
            if (value.id === action.payload.id ){
              console.log(value)
              value.amount += 1 
            }else {
              console.log('differnt')
              state.bag.push(action.payload) ;
            }
            return null
          })
        },
        removeFromBag : (state,action)=>{
          state.bag.push(action.payload) ;
        }
    }
})

export const bagActions = bagSlice.actions;
export default bagSlice



