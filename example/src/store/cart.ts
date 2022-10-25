import { ADD_TO_CART } from './actions';

import type { CartItem } from '../config/types';

// STATE

type CartState = {
  cart: CartItem[];
};

type CartAction = {
  type: string;
  payload: CartItem;
};

const initialState: CartState = {
  cart: [],
};

// REDUCERS

export default function cart(state = initialState, action: CartAction) {
  let newCart;
  switch (action.type) {
    case ADD_TO_CART:
      newCart = [...state.cart, action.payload];
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
}
