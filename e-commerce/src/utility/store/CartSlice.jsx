import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        items: []
    },
    reducers: {
        addCart: (state, action) => {
            let data = action.payload;
            let objId = data.id;
            let obj = state.items.find(
                // taking out the index
                (cartObj)=> cartObj.objData.id === objId
            );

            if(obj){
                // case where obj is present
                obj.quantity = obj.quantity + 1;
            }else{
                let cartObj = { objData: data, quantity: 1 };
                state.items.push(cartObj);  
            }
        },
        removeCart: (state, action) => {
            let id = action.payload;
            let objIdx = state.items.findIndex((cartObj) => cartObj.objData.id === id);
            if (objIdx !== -1) {
                state.items.splice(objIdx, 1);
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
        incrementQuantity: ( state , action)=>{
            let objId = action.payload;
            let obj = state.items.find(
                (cartObj)=> cartObj.objData.id === objId
            );
            obj.quantity = obj.quantity + 1;
        },

        DecrementQuantity: (state, action) => {
            let objId = action.payload;
            let obj = state.items.find((cartObj) => cartObj.objData.id === objId);
        
            if (obj?.quantity === 1) {
                let objIdx = state.items.findIndex((cartObj) => cartObj.objData.id === objId);
                if (objIdx !== -1) {
                    state.items.splice(objIdx, 1);
                }
            } else if (obj) {
                obj.quantity -= 1;
            }
        },
        

        sortAcsending: (state, action)=>{
              state.items.sort((a,b)=> a.objData.price - b.objData.price);
        },

        sortDesending: (state, action)=>{
            state.items.sort((a,b)=> a.objData.price + b.objData.price);
      }

    }
});

export let { addCart, removeCart, clearCart, incrementQuantity, DecrementQuantity, sortAcsending, sortDesending } = CartSlice.actions;
export default CartSlice.reducer;
