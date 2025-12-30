import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const productData=createAsyncThunk('product',async()=>{
    let res=await fetch("https://dummyjson.com/products");
    res=await res.json();
    console.log("datas",res.products);
    
    return res;
})
const initialState={
    items:[],
    status:undefined,
    error:null    
}

 const getData=createSlice({
    name:"product",
    initialState,
    extraReducers:(builder)=>{
         builder.addCase(productData.fulfilled,(state,action)=>{
           state.status='succeeded',
           state.items=action.payload.products
         })
    }
})

export default getData.reducer;