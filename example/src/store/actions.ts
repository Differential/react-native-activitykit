import type { CartItem, Pizza, Topping } from '../config/types';

export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart({
  pizza,
  toppings,
}: {
  pizza: Pizza;
  toppings: Topping[];
}) {
  const price = 18;
  const item: CartItem = {
    pizza,
    toppings,
    quantity: 1,
    price,
  };

  return {
    type: ADD_TO_CART,
    payload: {
      item,
    },
  };
}
