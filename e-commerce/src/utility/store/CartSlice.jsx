import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState:{
        items: ["Tv","fridge"]
    },
    reducers:{
        addCart:(state, action)=>{
            let data = action.payload;
            let cartObj = {objData: data, quantity: 1};
            state.items.push(objData)
        },
        removeCart:(state, action)=>{
            let id = action.payload;
            let objIdx = state.items.findIndex((cartObj)=>{cartObj.objData.id === id});
            state.items.splice(objIdx, 1);

            clearCart: (state, action)=>{
                state.items.length = 0;

            }
        }
    }
})

export let {addCart, removeCart, clearCart} = CartSlice.actions;
export default CartSlice.reducer