type OrderStatus = 'placed';

export type Pizza = {
  _id: string;
  title: string;
  image: string;
  description: string;
};

export type Topping = {
  _id: string;
  name: string;
  price: number;
};

export type CartItem = {
  pizza: Pizza;
  toppings: Topping[];
  price: number;
  quantity: number;
};

export type Order = {
  items: CartItem[];
  total: number;
  status: OrderStatus;
};
