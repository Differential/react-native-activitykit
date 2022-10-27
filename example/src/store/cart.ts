import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartItem } from '../config/types';

import type { RootState } from '../store';

// Define a type for the slice state
interface CartState {
  cart: CartItem[];
}

// Define the initial state using that type
const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
