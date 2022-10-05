// import {
//   FORM_SUBMITTED,
//   SELECT_OPTION,
//   UPDATE_FIELDS,
//   UPDATE_CAMPUS,
// } from './actions';

type ReduxAction = {
  type: string;
  payload: string;
};

type CartTopping = {
  name: string;
  cost: number;
};

type CartItem = {
  pizzaId: string;
  toppings: [CartTopping];
};

export type OrderState = {
  menuSelection: string;
  cart: [CartItem?];
};

const defaultState: OrderState = {
  menuSelection: 'Pizza',
  cart: [],
};

export default function order(
  state: OrderState = defaultState,
  action: ReduxAction
) {
  switch (action.type) {
    case SELECT_MENU_CATEGORY:
      return {
        ...state,
        menuSelection: action.payload,
      };

    // case UPDATE_FIELDS:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };

    // case UPDATE_CAMPUS:
    //   return {
    //     ...state,
    //     campus: action.payload,
    //   };

    // case FORM_SUBMITTED:
    //   return {
    //     ...state,
    //     formSubmitted: true,
    //   };

    default:
      return state;
  }
}
