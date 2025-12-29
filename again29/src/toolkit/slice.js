import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}

const addToCart=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addItem:(state)=>{
            state.value+=1;
        }
        ,removeItem:(state)=>{
            state.value-=1;
        },
         add2Item:(state,actions)=>{
            state.value+=actions.payload;
        }
        ,remove2Item:(state,actions)=>{
            state.value-=actions.payload;
        }
    }
})

export const {addItem,removeItem,add2Item,remove2Item} =addToCart.actions;
export default addToCart.reducer