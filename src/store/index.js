import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bag-slice";

const store= configureStore({reducer : {bag : bagSlice.reducer}})

export default store;