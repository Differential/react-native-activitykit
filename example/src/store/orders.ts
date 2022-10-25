import { ADD_TO_CART } from './actions';

import type { CartItem } from '../config/types';

// STATE

type OrderState = {
  orders: CartItem[];
};

type OrderAction = {
  type: string;
  payload: CartItem;
};

const initialState: OrderState = {
  orders: [],
};

// REDUCERS

export default function orders(state = initialState, action: OrderAction) {
  let newCart;
  switch (action.type) {
    case ADD_TO_CART:
      newCart = [...state.orders, action.payload];
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
}
