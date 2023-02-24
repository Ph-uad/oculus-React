import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bagItems: [],
  bagIsVisible : false,
  totalAmount : 0
};

const bagSlice = createSlice({
    name : 'bag',
    initialState,
    reducers  : {
        addToBag: (state, action)=>{
          console.log(action.payload)
          const newItem = action.payload
          state.bagItems.push(
            {
              id: newItem.id,
              image: newItem.image,
              name: newItem.name,
              price: newItem.price
            })
           state.totalAmount += newItem.price 
        },
        removeFromBag : (state,action)=>{
          state.bagItems.push(action.payload) ;
        },
        showBag : (state, action)=>{
          console.log(state.bagIsVisible)
          state.bagIsVisible = action.payload
        }
    }
})

bagSlice.getInitialState()

export const bagActions = bagSlice.actions;
export default bagSlice



