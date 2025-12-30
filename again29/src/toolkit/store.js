import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice';
import productReducer from "./productSlice";

const store=configureStore({
    reducer:{
           product:productReducer,
     cart:cartReducer,
  
    }
})

export default store;