import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const productData=createAsyncThunk('product',async()=>{
    let res=await fetch("https://dummyjson.com/products");
    res=await res.json();
    console.log("datas",res);
    
    return res;
})





const initialState={
    items:[],
    status:undefined,
    error:null    
}

export const getData=createSlice({
    name:"product",
    initialState,
    extraReducers:(builder)=>{
         builder.addCase(productData.fulfilled,(state,actions)=>{
           state.status='succeeded',
           state.items=actions.payload
         })
    }
})

export default productData.reducer;