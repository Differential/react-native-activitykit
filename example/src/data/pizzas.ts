import Hawaiian from '../../assets/974.jpg';

export type Pizza = {
  _id: string;
  title: string;
  menuImage?: any;
};

const pizzas: Pizza[] = [
  { _id: '1', title: 'Classic Pepperoni' },
  { _id: '2', title: 'Build your own' },
  { _id: '3', title: 'Hawaiian', menuImage: Hawaiian },
  { _id: '4', title: 'Veggie' },
];

export default pizzas;
