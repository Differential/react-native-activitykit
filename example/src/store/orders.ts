import type { Order } from '../config/types';

// REDUCERS
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface OrderState {
  orders: Order[];
}

// Define the initial state using that type
const initialState: OrderState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: 'orders',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    createOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    updateOrderStatus: (state, action: PayloadAction<Order>) => {
      console.log({ action });
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order.orderId !== action.payload.orderId) {
            return order;
          }
          return {
            ...order,
            status: action.payload.status,
          };
        }),
      };
    },
  },
});

export const { createOrder, updateOrderStatus } = orderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectOrders = (state: RootState) => state.orders.orders;

export default orderSlice.reducer;
