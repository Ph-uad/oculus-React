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
          const newItem = action.payload;
          const findIndex = state.bagItems.findIndex(x => x.id === newItem.id);
          if(findIndex < 0){
            state.bagItems.push(
              {
                id: newItem.id,
                image: newItem.image,
                name: newItem.name,
                price: newItem.price,
                amount: 1
              })
            }else{
              state.bagItems[findIndex].price += action.payload.price
              state.bagItems[findIndex].amount +=1; 
            }

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



