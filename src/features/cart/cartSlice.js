//Slice contiene => nombre, estado inicial, reducers

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItems: (state, action) => {state.cartItems = action.payload},
        clearCart: (state) => {state.cartItems = []},
        removeItem: (state, action) => {
            const itemID = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
        },
        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id === payload);
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id === payload);
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotal: (state) =>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    }
})

export const {setCartItems, clearCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions;
export default cartSlice.reducer;