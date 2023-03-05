import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bagItems: [],
  totalAmount: 0
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addToBag: (state, action) => {
      const newItem = action.payload;
      const findIndex = state.bagItems.findIndex(x => x.id === newItem.id);
      console.log(findIndex, state.bagItems, action.payload)
      if (findIndex < 0) {
        state.bagItems.push(
          {
            id: newItem.id,
            image: newItem.image,
            name: newItem.name,
            price: newItem.price,
            amount: 1
          })
      } else {
        state.bagItems[findIndex].amount += 1;
      }
      state.totalAmount += newItem.price
    },
    increaseItemAmount: (state, action) => {
      const newItem = action.payload;
      const findIndex = state.bagItems.findIndex(x => x.id === newItem.id);
      state.bagItems[findIndex].amount += 1;
      state.totalAmount += newItem.price
    },

    reduceItemAmount: (state, action) => {
      const newItem = action.payload;
      const findIndex = state.bagItems.findIndex(x => x.id === newItem.id);
      if (state.bagItems[findIndex].amount === 1) {
        delete state.bagItems[findIndex]
      } else {
        state.bagItems[findIndex].amount -= 1;
      }
      state.totalAmount -= newItem.price
    }
    ,
    removeFromBag: (state, action) => {
      // state.bagItems.push(action.payload);
    },
  }
})

bagSlice.getInitialState()

export const bagActions = bagSlice.actions;
export default bagSlice



