import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState:{
        items: []
    },
    reducers:{
        addCart:(state, action)=>{
            let data = action.payload;
            let cartObj = {objData: data, quantity: 1};
            state.items.push(objData)
        },
        removeCart:(state, action)=>{
            let id = action.payload
        }
    }
})