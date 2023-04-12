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
      if (action.payload === 0 ||state.bagItems[findIndex].amount === 1) {
        delete state.bagItems[findIndex]
      } else {
        state.bagItems[findIndex].amount -= 1;
      }
      state.bagItems = state.bagItems.filter(x => x )
      state.totalAmount -= newItem.price
    }
    ,
    removeFromBag: (state, action) => {
      const newItem = action.payload;
      const findIndex = state.bagItems.findIndex(x => x.id === newItem.id);
      state.totalAmount -= newItem.price * newItem.amount
      delete state.bagItems[findIndex];
      state.bagItems = state.bagItems.filter(x => x )
    },
  }
})

bagSlice.getInitialState()

export const bagActions = bagSlice.actions;
export default bagSlice



