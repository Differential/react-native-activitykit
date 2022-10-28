export type Topping = {
  _id: string;
  name: string;
  price: number;
};

const toppings: Topping[] = [
  { _id: '1', name: 'Spinach', price: 1 },
  { _id: '2', name: 'Tomatoes', price: 0 },
  { _id: '3', name: 'Mushrooms', price: 0 },
  { _id: '4', name: 'Garlic', price: 0 },
  { _id: '5', name: 'Extra Sauce', price: 0 },
  { _id: '6', name: 'Extra Cheese', price: 0 },
];

export default toppings;
