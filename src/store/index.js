import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bag-slice";
import uiSlice from "./ui-slice";

const store = configureStore({ reducer: { bag: bagSlice.reducer, ui: uiSlice.reducer } })

export default store;